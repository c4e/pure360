import angular from 'angular';
import uiRouter from 'angular-ui-router';
import emailDetailsComponent from './emailDetails.component';

let emailDetailsModule = angular.module('emailDetails', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('emailDetails', {
      state: 'emailDetails',
      url: '/email/:id',
      component: 'emailDetails'
    });
})

.component('emailDetails', emailDetailsComponent)

.name;

export default emailDetailsModule;
