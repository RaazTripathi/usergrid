/**
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

'use strict';

var polyfills = function(window, Object) {
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function( /* function */ callback, /* DOMElement */ element) {
        window.setTimeout(callback, 1000 / 60);
    };
  })();

  Object.defineProperty(Object.prototype, "clone", {
    enumerable: false,
    writable: true,
    value: function() {
      var i, newObj = (this instanceof Array) ? [] : {};
      for (i in this) {
        if (i === 'clone') {
          continue;
        }
        if (this[i] && typeof this[i] === "object") {
          newObj[i] = this[i].clone();
        } else {
          newObj[i] = this[i];
        }
      }
      return newObj;
    }
  });

  Object.defineProperty(Object.prototype, "stringifyJSON", {
    enumerable: false,
    writable: true,
    value: function() {
      return JSON.stringify(this, null, '\t');
    }
  });

};

polyfills(window,Object);
var global=global||this;
var AppServices = AppServices || {};
global.AppServices = global.AppServices || AppServices;

AppServices.Constants = angular.module('appservices.constants', []);
AppServices.Services = angular.module('appservices.services', []);
AppServices.Controllers = angular.module('appservices.controllers', []);
AppServices.Filters = angular.module('appservices.filters', []);
AppServices.Directives = angular.module('appservices.directives', []);
AppServices.Performance = angular.module('appservices.performance', []);
AppServices.MAX = angular.module('appservices.max', []);

angular.module('appservices', ['ngRoute',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'angulartics',
  'angulartics.google.analytics',
  'appservices.filters',
  'appservices.services',
  'appservices.directives',
  'appservices.constants',
  'appservices.controllers',
  'appservices.max',
  'angular-intro',
]).config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', '$analyticsProvider', '$httpProvider',
  function($routeProvider, $locationProvider, $sceDelegateProvider, $analyticsProvider, $httpProvider) {
    $routeProvider
      .when('/org-overview', {
        templateUrl: 'org-overview/org-overview.html',
        controller: 'OrgOverviewCtrl'
      })
      .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl'
      })
      .when('/login/loading', {
        templateUrl: 'login/loading.html',
        controller: 'LoginCtrl'
      })
      .when('/app-overview/summary', {
        templateUrl: 'app-overview/app-overview.html',
        controller: 'AppOverviewCtrl'
      })
      .when('/getting-started/setup', {
        templateUrl: 'app-overview/getting-started.html',
        controller: 'GettingStartedCtrl'
      })
      .when('/forgot-password', {
        templateUrl: 'login/forgot-password.html',
        controller: 'ForgotPasswordCtrl'
      })
      .when('/register', {
        templateUrl: 'login/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/users', {
        templateUrl: 'users/users.html',
        controller: 'UsersCtrl'
      })
      .when('/users/profile', {
        templateUrl: 'users/users-profile.html',
        controller: 'UsersProfileCtrl'
      })
      .when('/users/groups', {
        templateUrl: 'users/users-groups.html',
        controller: 'UsersGroupsCtrl'
      })
      .when('/users/activities', {
        templateUrl: 'users/users-activities.html',
        controller: 'UsersActivitiesCtrl'
      })
      .when('/users/feed', {
        templateUrl: 'users/users-feed.html',
        controller: 'UsersFeedCtrl'
      })
      .when('/users/graph', {
        templateUrl: 'users/users-graph.html',
        controller: 'UsersGraphCtrl'
      })
      .when('/users/roles', {
        templateUrl: 'users/users-roles.html',
        controller: 'UsersRolesCtrl'
      })
      .when('/groups', {
        templateUrl: 'groups/groups.html',
        controller: 'GroupsCtrl'
      })
      .when('/groups/details', {
        templateUrl: 'groups/groups-details.html',
        controller: 'GroupsDetailsCtrl'
      })
      .when('/groups/members', {
        templateUrl: 'groups/groups-members.html',
        controller: 'GroupsMembersCtrl'
      })
      .when('/groups/activities', {
        templateUrl: 'groups/groups-activities.html',
        controller: 'GroupsActivitiesCtrl'
      })
      .when('/groups/roles', {
        templateUrl: 'groups/groups-roles.html',
        controller: 'GroupsRolesCtrl'
      })
      .when('/roles', {
        templateUrl: 'roles/roles.html',
        controller: 'RolesCtrl'
      })
      .when('/roles/settings', {
        templateUrl: 'roles/roles-settings.html',
        controller: 'RolesSettingsCtrl'
      })
      .when('/roles/users', {
        templateUrl: 'roles/roles-users.html',
        controller: 'RolesUsersCtrl'
      })
      .when('/roles/groups', {
        templateUrl: 'roles/roles-groups.html',
        controller: 'RolesGroupsCtrl'
      })
      .when('/data', {
        templateUrl: 'data/data.html',
        controller: 'DataCtrl'
      })
      .when('/data/entity', {
        templateUrl: 'data/entity.html',
        controller: 'EntityCtrl'
      })
      .when('/data/shell', {
        templateUrl: 'data/shell.html',
        controller: 'ShellCtrl'
      })
      .when('/profile/organizations', {
        templateUrl: 'profile/organizations.html',
        controller: 'OrgCtrl'
      })
      .when('/profile/profile', {
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/profile', {
        templateUrl: 'profile/account.html',
        controller: 'AccountCtrl'
      })
      .when('/activities', {
        templateUrl: 'activities/activities.html',
        controller: 'ActivitiesCtrl'
      })
      .when('/shell', {
        templateUrl: 'shell/shell.html',
        controller: 'ShellCtrl'
      })
      .when('/logout', {
        templateUrl: 'login/logout.html',
        controller: 'LogoutCtrl'
      })
      .otherwise({
        redirectTo: '/org-overview'
      });

    $locationProvider
      .html5Mode(false)
      .hashPrefix('!');

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://apigee-internal-prod.jupiter.apigee.net/**',
      'http://apigee-internal-prod.mars.apigee.net/**',
      'https://appservices.apigee.com/**',
      'https://api.usergrid.com/**'
    ]);

    $analyticsProvider.virtualPageviews(false);
    $analyticsProvider.firstPageview(false);

    $httpProvider.defaults.useXDomain = true;    

  }
]);
