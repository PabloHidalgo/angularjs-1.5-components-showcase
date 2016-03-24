# angularjs-1.5-components-showcase

AngularJS 1.5 DEMO Project that aims to show how easy is to build a scalable & modular angularjs component based application architecture using ui-router 1.0, angularjs 1.5 and some basic tips!.

* FEATURES

- Full component based application architecture (dumb & smart components, components hierarchy construction, etc...) looking forward to routable-components!

- Component based structure folder (aims to ease an easy port to AngularJS 2 / ES2015 and easy scalability)

- Centralized & scalable datacontext service (based on John's Papa Code Camper BMEAN data module: https://github.com/johnpapa/ng-demos/tree/master/cc-bmean/src/client/app/data).

- anguilar-ui-router $resolve feature on templates! NO controller needs on $states! (that means, inline $state template definition based on routable-components :)

- Built-in RESTful API server on top of json-server combined with faker that generates unique data for each gulp session. It provides basic data for application.

* INSTRUCTIONS

- npm install
- bower install
- gulp serve-dev

enjoy!

* CREDITS TO

- John Papa (main causer that I didn't left angularjs learning ending 2012: thanks for all your contribution to the community...articles, videos, demos, poc, projects, tips, courses, comments, etc...)
  - gulpfile taken from his HotTowel project!
  - data module based on his Code Camper BMEAN data module! I love the repository concept applied's on angularjs SPA & components flow :)

- christopherthielen (angular-ui/ui-router) from all his tips about code organization and his efficience on fixings ui-router bug & new feature add's (routable components here we go!).
