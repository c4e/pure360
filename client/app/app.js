import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

// services
import { EmailService } from './services/email';

// import bootstrap / jquery / asyn pipe
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'angular1-async-filter';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngSanitize, 
    'asyncFilter'
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .service('EmailService', EmailService)
  .component('app', AppComponent);
