import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import HALParser from 'halParser/src/Parser';
import BaasicApi from 'baasic-sdk-angularjs/dist/baasic-sdk-angularjs';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components,
    "baasic.api",
    "baasic.membership",
    "baasic.security",
    "baasic.appSettings",
    "baasic.article",
    "baasic.dynamicResource",
    "baasic.keyValue",
    "baasic.valueSet"
  ])
  .config(($locationProvider, baasicAppProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    baasicAppProvider.create("hacknet", {
      apiRootUrl: "api.baasic.com",
      apiVersion: "beta"
    });
  })

  .component('app', AppComponent);
