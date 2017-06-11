'use strict';

describe('Controller: searchContoller', function () {

    beforeEach(inject([
        '$injector',
        function ($injector) {

	     var $rootScope
			,$state
			,$scope
			,$httpBackend
			,initService
			,$controller
			,$constant
            ,sampleResponseForLocations = {
                "html_attributions" : [],
                "results" : [
                  {
                     "formatted_address" : "G- 83 , Vikas Surya Shopping Mall, Sector-3 , Rohini, Mangalam Place, Sector 3, Rohini, Delhi, 110085, India",
                     "geometry" : {
                        "location" : {
                           "lat" : 28.699547,
                           "lng" : 77.117425
                        },
                        "viewport" : {
                           "northeast" : {
                              "lat" : 28.7008959802915,
                              "lng" : 77.11877398029151
                           },
                           "southwest" : {
                              "lat" : 28.6981980197085,
                              "lng" : 77.11607601970849
                           }
                        }
                     },
                     "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
                     "id" : "d7592f2fce0ca34fdaf5984b9449c03721b24501",
                     "name" : "Jai Ho! Society",
                     "place_id" : "ChIJW3yoeeQDDTkRp-4s6kH3Nf0",
                     "rating" : 5,
                     "reference" : "CmRbAAAAjBMFwbcLUh1RRndKsySJmTyxaqpjVkvCj2MuwH4oe9tga3-RmvUbGgxbo8iMUf0LXVZA_pSrAvQ5wdw7gv7ExwLHk4vQgNGJOpl7kNYGinWXkLVs7UDR6XaVmzzhZDXSEhB6cbgcgr4gU5TS4okeEeI3GhTOVxU5tf9qTD3IJeQLRIaIgiKEJA",
                     "types" : [ "point_of_interest", "establishment" ]
                  }
           ],
                 "status" : "OK"
           }
           ,sampleResponseForHotels = [{"name":"Deep Jungle Hotel","city":"Munnar","address":"M-10"},{"name":"Hotel Grand View","city":"New Delhi","address":"Preet Vihar"},{"name":"Hotel Heritage","city":"New Delhi","address":"Udyog Vihar"},{"name":"Hotel Ibis","city":"Jaipur","address":"Near Hawa Mehel"},{"name":"Hotel Marine View","city":"New Delhi","address":"Preet Vihar"}];

			beforeEach(module('fab'));
			beforeEach(module(function($provide){
			    // $provide.service('initService', initService);
			}));
        	$controller = $injector.get('$controller');
            $rootScope = $injector.get('$rootScope');
            $state = $injector.get('$state');
            $constant = $injector.get('$constant');
            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');


            $controller('searchContoller', {
                '$scope': $scope
            });
            
            var keyword = 'ho';
                locationSearchUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+keyword +'&location=28.7041,77.1025&key=AIzaSyBC7_p3Ag0PHYrD8nN-deOVDk3scjLSb-U',
                hotelSearchURl = 'http://localhost/fabHotels/api/controllers/searchHotelsController.php?query='+keyword+'&method=searchHotels';
            
               $httpBackend.expectGET(locationUrl).respond(200, JSON.stringify(sampleResponseForLocations));
               $httpBackend.expectGET(locationUrl).respond(200, JSON.stringify(sampleResponseForHotels));
           
            $httpBackend.flush();
           
    }]));

    describe('Initialization',function(){
        it('should initialize values mapped to scope', function() {
            expect($scope.resultsReady).toBe(!1);
        });
    });
});