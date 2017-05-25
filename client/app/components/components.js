import angular from 'angular';
import Home from './home/home';
import EmailList from './emailList/emailList';

let componentModule = angular.module('app.components', [
  Home,
  EmailList
])

.name;

export default componentModule;
