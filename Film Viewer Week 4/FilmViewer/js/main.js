var App = angular.module('FilmViewer',['ngRoute']);

App.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/details/:movieId',{
			templateUrl:'views/details.html',
			controller: 'movieController',
			foodata: 'Details'
		}).
		when('/index',{
			templateUrl:'../index.html',
			controller: 'CoreCtrl',
			foodata: 'index'
		}).
		otherwise({
			redirectTo: '/index'
		});
}]);

App.controller('CoreCtrl', function($scope, $http){
	$scope.title = 'Film Viewer';
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


		
App.controller('movieController', function($scope, $http, $routeParams) {
	/*$scope.movie_id = $routeParams.movieId;*/
	$scope.movie = data;
    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json', {
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
    	$scope.movie = data.movie.title;
    	
    	
    	/*
    	$scope.cover = data.movie.poster.thumbnail;
    	
    	$scope.cover = $routeParams.movieId.runtime;
    	
    	/*
    	console.log (data.movie.poster.thumbnail)*/
    	/*
    	$scope.syn = $routeParams.movieId.synopsis;
    	console.log (data.movie.synopsis)
    	*/
    	
        /* 
       	$scope.cover = data.movie.poster.thumbnail;
        $scope.rating = data.movie.mpaa_rating;
        $scope.time = data.movie.runtime;
        $scope.syn = data.movie.synopsis;	
        $scope.rating = data.movie.mpaa_rating;
        */
    })
    .error(function (data) { 
    	console.log('error', data); 
    });
})