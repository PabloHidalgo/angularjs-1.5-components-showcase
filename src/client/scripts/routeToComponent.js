'use strict';

var app = angular.module('ui.router.components', ['ui.router']);
var args2Array = function args2Array(_args) {
  return Array.prototype.slice.call(_args);
};

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
var getCompInputs = function getCompInputs($injector, componentName) {
  return $injector.get(componentName + "Directive").map(function (directive) {
    return Object.keys(directive.bindToController);
  }).reduce(unnestR, []);
};

// un-nest one level of arrays
var unnestR = function unnestR(acc, array) {
  return acc.concat(array);
};

registerComponentDecorator.$inject = ['$stateProvider'];

function registerComponentDecorator($stateProvider) {
  $stateProvider.decorator('component', function (stateDef, parent) {
    if (stateDef.component) {
      // console.log('${stateDef.name} routes to component ${stateDef.component}')
      stateDef.controllerProvider = ['$injector', function ($injector) {
        // console.log('Creating bindResolve controller for ${stateDef.component}')
        return bindResolves.apply(null, getCompInputs($injector, stateDef.component));
      }];

      stateDef.templateProvider = ['$injector', function ($injector) {
        var attrs = getCompInputs($injector, stateDef.component).map(function (key) {
          return key + '="' + key + '"';
        }).join(" ");
        var kebobName = stateDef.component.replace(/([A-Z])/g, function ($1) {
          return "-" + $1.toLowerCase();
        });
        var template = '<' + kebobName + ' ' + attrs + '></' + kebobName + '>';
        // console.log('Created template ${template} for ${stateDef.component}')
        return template;
      }];
    }

    return stateDef.component;
  });
}

app.config(registerComponentDecorator);
