"use babel";

const app = angular.module('ui.router.components', ['ui.router']);
const args2Array = (_args) => Array.prototype.slice.call(_args);

function bindResolves() {
  var injectNames = controller.$inject = ['$scope'].concat(args2Array(arguments));

  function controller($scope) {
    var injectValues = args2Array(arguments);
    for (var i = 1; i < injectValues.length; i++) {
      $scope[injectNames[i]] = injectValues[i];
    }
  }

  return controller;
}

// Gets all the directive(s)' bindToController keys
const getCompInputs = ($injector, componentName) => $injector.get(componentName + "Directive")
    .map(directive => Object.keys(directive.bindToController))
    .reduce(unnestR, []);

// un-nest one level of arrays
const unnestR = (acc, array) => acc.concat(array);


function registerComponentDecorator($stateProvider) {
  $stateProvider.decorator('component', function(stateDef, parent) {
    if (stateDef.component) {
      // console.log('${stateDef.name} routes to component ${stateDef.component}')
      stateDef.controllerProvider = function($injector) {
        // console.log('Creating bindResolve controller for ${stateDef.component}')
        return bindResolves.apply(null, getCompInputs($injector, stateDef.component));
      }

      stateDef.templateProvider = function($injector) {
        let attrs = getCompInputs($injector, stateDef.component)
            .map(key => `${key}="${key}"`) .join(" ");
        let kebobName = stateDef.component.replace(/([A-Z])/g, $1 => "-"+$1.toLowerCase());
        let template = `<${kebobName} ${attrs}></${kebobName}>`;
        // console.log('Created template ${template} for ${stateDef.component}')
        return template;
      }
    }

    return stateDef.component;
  })
}

app.config(registerComponentDecorator); 
