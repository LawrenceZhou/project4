'use strict';

cs142App.controller('HeaderController', ['$scope', function($scope) {

   // $scope.main is defined if we are a child $scope of the main $scope in which
   // case it contains the page's title property.  We update it so the page title
   // will include this view's name "Example".
      $scope.style = 'JAPONESQUE';
});
