'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.mainView',
    'myApp.version'
]).
    config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({ redirectTo: '/mainView' });
    }]);
