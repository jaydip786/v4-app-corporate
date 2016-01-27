'use strict';

angular.module('myApp.login', ['ngRoute', 'ngCordova', 'ngTouch',   
  'angular-loading-bar'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', ['$scope', '$log', '$window', '$location', '$http', 'urlService',
  function($scope, $log, $window, $location, $http, urlService) {
    $log.debug("loginCtrl");
    $scope.user = {};

    $scope.doLogIn = function () {
        $http.get(urlService.apiCallsUrl + 'Login_api/login', {user: $scope.user.username, pass: $scope.user.password}).success(function (data) {
            if (data.status) {
                alert("Success");
                
                // $http.setToken(data.info.token);
                // $scope.isAuthenticated = true;
                // $location.path('main');
            } else {
                alert("login error");
            }
        }).error(function (error) {
            alert("Login Error!");
        });
    };

    $scope.doLogOut = function () {
        $http.removeToken();
    };
}]);
