'use strict';

(function() {
	fab.service('searchService', [
		'$http',
		'$httpParamSerializerJQLike',
		'$q',
        '$rootScope',
        'urlConfigConstants',
        '$location',
		function($http, $dataSerializer, $q,$rootScope,urlConfigConstants,$location) {
            
            this.getLocationResults = function(keyWord) {
				var def = $q.defer(); 
					$http({
						method: 'get',
						url: urlConfigConstants.locationResultURL,
						params: {
							query:keyWord,
							location:urlConfigConstants.currentLatLong,
							key:urlConfigConstants.googleAPIKey
							// fields:'results(formatted_address,name)'
						},
					}).then(function(response) {
							def.resolve(response.data);
						},
						function(response) {
							def.reject({
								'errorType': 'Request',
								'errorObj': response.data
							});
						});
				    return def.promise;
			};
			 this.getHotelResults = function(keyWord) {
				var def = $q.defer(); 
					$http({
						method: 'get',
						url: urlConfigConstants.hotelResultURL,
						params: {
							query:keyWord,
							method:'searchHotels'
						},
					}).then(function(response) {
							def.resolve(response.data);
						},
						function(response) {
							def.reject({
								'errorType': 'Request',
								'errorObj': response.data
							});
						});
				    return def.promise;
			};
		}
	]);
})();
