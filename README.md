# angularjs-1.5-components-showcase

AngularJS 1.5 DEMO Project that aims to show how easy is to build a scalable & modular angularjs component based application architecture using ui-router 1.0 routable components, angularjs 1.5 component definition and some basic tips!.

ONLINE DEMO (AWS S3 FREE TIER):
---

http://phidalgo.angular-components-showcase.s3-website-eu-west-1.amazonaws.com

FEATURES
---

- Full component based application architecture (dumb & smart components, components hierarchy construction, etc...) based on routable-components!

- anguilar-ui-router state definition based on routable components & resolve injection:
  - NO controller needs on $states!
  - NO template(url) needs on $states!

- Component based structure folder (aims to ease an easy port to AngularJS 2 / ES2015 and easy scalability - WORK IN PROGRESS)

- Centralized & scalable datacontext service (based on John's Papa Code Camper BMEAN data module: https://github.com/johnpapa/ng-demos/tree/master/cc-bmean/src/client/app/data).

- Built-in RESTful API server on top of json-server combined with faker that generates unique data for each gulp session. It provides basic data for application.

INSTRUCTIONS
---

- npm install
- bower install
- gulp serve-dev

enjoy!

CREDITS TO
---

- John Papa (main causer that I didn't left angularjs learning ending 2012: thanks for all your contribution to the community...articles, videos, demos, poc, projects, tips, courses, comments, etc...)
  - gulpfile taken from his HotTowel project!
  - data module based on his Code Camper BMEAN data module! I love the repository concept applied's on angularjs SPA & components flow :)

- christopherthielen (angular-ui/ui-router) from all his tips about code organization and his efficience on fixings ui-router bug & new feature add's (routable components(L))).
