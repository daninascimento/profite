'use strict';

/**
 * @ngdoc function
 * @name profiteApp.controller:CarouselCtrl
 * @description
 * # CarouselCtrl
 * Controller of the profiteApp
 */
angular.module('profiteApp')
    .controller('CarouselCtrl', function($scope) {
        $scope.activeSlideIndex = 0;

        $scope.data = {};

        $scope.data.slides = [];

        for (var i = 0; i < 3; i++) {

            $scope.data.slides[i] = {
                img: './images/banners/' + (i + 1) + '.png'
            };
        }

        $scope.carouselOptions = {
            id: 'myCarousel',
            clickSpeed: 800,
            keySpeed: 800,
            prevClickEnabled: true,
            autoPlay: true,
            autoPlayDelay: 8000
        };

        $scope.carouselEmitter = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            $scope.$emit('carousel:' + arguments[0], args.length ? args : undefined);
        };

        $scope.$on('carousel:changeSuccess', function(e, i) {
            $scope.activeSlideIndex = i;
        });
    });
