import angular from 'angular';
import uiRouter from 'angular-ui-router';
import emailListComponent from './emailList.component';

let emailListModule = angular.module('emailList', [
  uiRouter
])

.component('emailList', emailListComponent)

.name;

export default emailListModule;
