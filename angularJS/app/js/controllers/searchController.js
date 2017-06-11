'use strict';

(function(){
  fab.controller('searchController',[
  	   '$scope',
  	   'searchService',
  	    function($scope,searchService){

  	    	$scope.resultsReady = !1;

  	    	$scope.$watch('keyword',function(newVal,oldVal){
  	    		if(newVal!=oldVal){
	               $scope.getSearchResults();
  	    		}
  	    	}); 

  	    	$scope.getSearchResults = function(){
  	    		var keyword = $scope.keyword;
    	    		searchService.getLocationResults(keyword).then(function(data) {
    					$scope.locationsResult = data.results;
    					$scope.locationResultsReady = !0;
					}, function() {
						console.log('OOPS!! something went wrong with location results');
					});
              searchService.getHotelResults(keyword).then(function(data) {
    					$scope.hotelsResult = data;
    					$scope.hotelResultsReady = !0;
					}, function() {
						console.log('OOPS!! something went wrong with hotel results');
					});
  	    	}     
  }]);

})();
