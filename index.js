var myTorrent=angular.module('myTorrent',[]);


myTorrent.controller('IndexCtrl', ['$scope','$http','$timeout', function($scope,$http,$timeout){
	
	$scope.mydata ={};


url="https://yts.ag/api/v2/list_movies.json";

url1=url+"?";

$http.get(url).then(function(response){

console.log(response);

$scope.mydata=response;


});
$timeout(function(){

$scope.movieCount=0;
$scope.movies=[];

var q720p="720p";
var q1080p="1080p";
var q3d="3D";
var q="quality";
var rating="minimum_rating"; //take integer
var genre="genre";//string data
	
$scope.movieCount=$scope.mydata.data.data.movie_count;
	$scope.movies=$scope.mydata.data.data.movies;





},2000);

$scope.searchQuery="";
$scope.searchResponse={};
$scope.searchMovie=function()
{


var searchUrl="http://www.omdbapi.com/?t="+$scope.searchQuery+"&r=json";

$http.get(searchUrl).then(function(response)
{
	$scope.searchResponse=response;
	console.log($scope.searchResponse);

}
);

};







}]);

