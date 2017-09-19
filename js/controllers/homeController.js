angular.module('starwarsApp')
  .controller('homeController', function($scope, $window, $rootScope, $location, apiService) {
      
    $scope.init = function () {
      $rootScope.getMovies()
    }

    $scope.getDetailsById = function(movieSelected) {
      $rootScope.movie = movieSelected
      $location.path('/details')
    }
      
    $rootScope.getMovies = function () {
      apiService.getMovies()
        .then(function(response) {
          $rootScope.movies = response
          console.log(response[0].title)
        })
      }
    })


