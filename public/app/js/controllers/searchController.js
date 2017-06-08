'use strict';

(function(){
  fab.controller('searchController',[
  	   '$scope',
  	   'searchService',
  	    function($scope,searchService){

  	    	$scope.resultsReady = !1;

  	    	$scope.$watch('keyword',function(newVal,oldVal){
  	    		if(newVal!=oldVal){
	                    searchService.getLocationResults(newVal).then(function(data) {
						$scope.locationsResult = data.results;
						$scope.resultsReady = !0;
					}, function() {
						console.log('OOPS!! something went wrong');
					});
	                    searchService.getHotelResults(newVal).then(function(data) {
						$scope.hotelsResult = data;
						$scope.resultsReady = !0;
					}, function() {
						console.log('OOPS!! something went wrong');
					});
  	    		}
  	    	});      
  }]);

})();
