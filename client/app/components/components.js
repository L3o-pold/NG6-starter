import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Register from './register/register';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Register
])

.name;

export default componentModule;
