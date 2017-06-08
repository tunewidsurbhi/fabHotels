'use strict';

describe('Controller: searchContoller', function () {

    // Initialize the controller and a mock scope
    beforeEach(inject([
        '$injector',
        function ($injector) {

	     var $rootScope
			,$state
			,$scope
			,$httpBackend
			,initService
			,$controller
			,$constant;

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

            // $httpBackend.expectGET('/PpfApi/getData/conditions_list').respond(200, JSON.stringify(xhrConditionList));
            // $httpBackend.expectGET('/do/seller/ShowSellerForms/getSellerConstants/all?other_constants=imageConstantsNew,propTypePhotoTypeMapping,QSWPropTypeWise').respond(200, JSON.stringify(_99minMaxData));
            // $httpBackend.expectGET('/PpfApi/getData/alldata').respond(200, JSON.stringify(xhrDropDwnData));
            // $httpBackend.expectGET('views/partials/primary-details.html').respond(200, '');
            $httpBackend.flush();


            $controller('searchContoller', {
                '$scope': $scope
            });

            // $constant('')
            
            var keyword = $scope.keyword;
            
            // $httpBackend.expectGET('http://server/PpfApi/getData/TYPE?rescom=R&mode='+modeVal.id).respond(200, JSON.stringify(pType['R'+modeVal.id]));
            // $httpBackend.expectGET('http://server/PpfApi/getData/TYPE?rescom=R&mode='+modeVal.id).respond(200, JSON.stringify(pType['R'+modeVal.id]));
            // $httpBackend.flush();
            // $scope.$digest();
    }]));

    describe('Initialization',function(){
        it('should initialize values mapped to scope', function() {
            expect($scope.resultsReady).toBe(!1);
        });
    });
});