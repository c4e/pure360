import angular from 'angular';
import Home from './home/home';
import EmailList from './emailList/emailList';
import EmailDetails from './emailList/emailDetails/emailDetails';

let componentModule = angular.module('app.components', [
  Home,
  EmailList,
  EmailDetails
])

.name;

export default componentModule;
