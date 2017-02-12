"use strict";

/**
 * Create an angular module called 'cs142App' and assign it to a DOM property with the same name.
 * The [] argument specifies module is to be created and doesn't require any other module.
 */
var cs142App = angular.module('cs142App', []);

/**
 * Create a controller named 'MainController'.  The array argument specifies the controller
 * function and what dependencies it has.  We specify the '$scope' service so we can have access
 * to the angular scope of view template.
 */
cs142App.controller('MainController', ['$scope', function($scope) {
   // We defined an object called 'main' with a single property 'title' that is used
   // by the html view template to get the page's title in the browser tab.
   $scope.main = {};
   $scope.main.title = 'CS142 Project #4';
   $scope.main.name = 'Yijun';
   $scope.main.motto = 'Blossom';

   $scope.p4 = {};
   $scope.p4.exampleVisible = true;
   $scope.p4.buttonMessage = '';

   if($scope.p4.exampleVisible === true){
   	    	$scope.p4.buttonMessage = 'Swtich to states';
   	    } else {
   	    	$scope.p4.buttonMessage = 'Swtich to example';
   	    }
   

   $scope.switchView = function() {
   	    if($scope.p4.exampleVisible === true){
   	    	$scope.p4.exampleVisible = false;
   	    	$scope.p4.buttonMessage = 'Swtich to states';
   	    } else {
   	    	$scope.p4.exampleVisible = true;
   	    	$scope.p4.buttonMessage = 'Swtich to example';
   	    }
   		
    };
}]);