'use strict';

/**
 * @ngdoc service
 * @name profiteApp.products
 * @description
 * # products
 * Factory in the profiteApp.
 */
angular.module('profiteApp')
    .factory('products', ['$http', function($http) {
        return $http.get('data/products.json')
            .success(function(data) {
                return data;
            })
            .error(function(data) {
                return data;
            });
    }]);