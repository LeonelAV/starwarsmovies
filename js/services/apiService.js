angular.module('starwarsApp')
  .factory('apiService', function($http){
    
    function getMovies() {
      var urlSearchMovies = 'data/ships.json'
      return $http.get(urlSearchMovies)
        .then(response => response.data.results)
    }

    return {
      getMovies: getMovies}
})