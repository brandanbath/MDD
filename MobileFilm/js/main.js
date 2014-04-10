var App = angular.module('FilmViewer',[]);

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
		$scope.movie = data.movie.year;
	})
	.error(function (data) { console.log('error', data); });
})