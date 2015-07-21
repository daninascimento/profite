'use strict';

/**
 * @ngdoc function
 * @name profiteApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the profiteApp
 */
angular.module('profiteApp')
    .controller('ProductsCtrl', ['$scope', 'products', function($scope, products) {
        products.success(function(data) {
            $scope.products = data;
        });
    }]);