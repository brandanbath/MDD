var App = angular.module('FilmViewer',['ngRoute']);

App.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/details/:id',{
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
	$scope.movie_id = $routeParams.id;
	$scope.movie = data;
	console.log ("test");
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
    	console.log($scope);
    	
    	$scope.movie = data;
    	
    	
    	
    	
    })
    /*.error(function (data) { 
    	console.log('error', data); 
    });*/
})