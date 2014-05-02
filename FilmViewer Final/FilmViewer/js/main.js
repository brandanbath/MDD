var App = angular.module('FilmViewer',['ngRoute']);

/* Routes For My Two Views (Details & Index) */
App.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/details/:id',{
			templateUrl:'views/details.html',
			controller: 'movieController',
			foodata: 'Details'
		}).
		when('/index',{
			templateUrl:'views/movies.html',
			controller: 'CoreCtrl',
			foodata: 'index'
		}).
		otherwise({
			redirectTo: '/index'
		});
}]);

/* Main Controller That Pulls The List of Movies */
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


/* Second Controller That is Used on The Details Page */	
App.controller('movieController', function($scope, $http, $routeParams) {
	$scope.movie_id = $routeParams.id;
    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/' + $routeParams.id + '.json', {
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
    	$scope.movie = data;
    	
    	
    })
    .error(function (data) { 
    	console.log('error', data); 
    });
})