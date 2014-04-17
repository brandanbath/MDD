var App = angular.module('FilmViewer',['ngRoute']);

App.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/Details/:movieId',{
			templateUrl:'../views/details.html',
			controller: 'movieController'
		}).
		when('/Index/:movieId',{
			templateUrl:'../index.html',
			controller: 'CoreCtrl'
		}).
		otherwise({
			redirectTo: '/index'
		});
}]);

App.controller('CoreCtrl', function($scope, $http){
	$scope.title = 'howdy world';
	$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json', { 
		params: { 
			apikey: 'kcby9f4hd7xx3pvhfukfwdrd', 
			callback: 'JSON_CALLBACK',
			page_limit: '16',
			page: '1',
			country: 'us'
		}
	}) 
	.success(function (data) { 
		$scope.allMovies = data.movies;
	})
	.error(function (data) { console.log('error', data); });
})


		
App.controller('movieController', function($scope, $http) {

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json', {
        params: {
            apikey: 'kcby9f4hd7xx3pvhfukfwdrd',
            callback: 'JSON_CALLBACK',
            page_limit: '16',
			page: '1',
			country: 'us'
        }
    })
    .success(function (data) {
    	$scope.movie_id = $routeParams.movieId;
        $scope.cover = data.movie.poster.thumbnail;
        $scope.rating = data.movie.mpaa_rating;
        $scope.time = data.movie.runtime;
        $scope.syn = data.movie.synopsis;
    })
    .error(function (data) { console.log('error', data); });
})