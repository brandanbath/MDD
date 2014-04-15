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
	})
	.error(function (data) { console.log('error', data); });
})


/*		
Movies.controller('movieController', function($scope, $http) {

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json', {
        params: {
            apikey: 'kcby9f4hd7xx3pvhfukfwdrd',
            callback: 'JSON_CALLBACK'
            page_limit: '16',
			page: '1',
			country: 'us'
        }
    })
    .success(function (data) {
        $scope.movie = data.movie.poster.thumbnail;
        $scope.cover = data.movie.mpaa_rating;
        #scope.time = data.movie.runtime;
        $scope.syn = data.movie.synopsis;
    })
    .error(function (data) { console.log('error', data); });
})


*/