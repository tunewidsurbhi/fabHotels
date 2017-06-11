<html>
  <head>
    <title>Fab Hotels - Angular</title>
    <link rel="stylesheet" type="text/css" href="app/css/main.css" />
    <script src="./app/js/libs/angular.js"></script>
  </head>
  <body>
    <div ng-app="fabHotelSearch"> 
        <div ng-controller="searchController" >
           <div data-ng-include src="'app/views/header.html'"></div>
	         <input type="text" ng-model="keyword" id="searchInput" placeholder="Search..."/>
	         <div ng-if="locationResultsReady">
		         	<ul class='searchUL'>
		         	    <li class="header marker"> Locations </li>
		         	    <li ng-repeat="location in locationsResult" class="marker">
		         	        <b> {{location.name}} </b> {{location.formatted_address}}
		         	    </li>
		         	</ul>
            </div>
            <div ng-if="hotelResultsReady">  
		         	<ul class="searchUL">
		         	    <li class="header building"> Hotels </li>
		         	    <li ng-repeat="hotel in hotelsResult" class="building">
		         	    	 <b> {{hotel.name}} </b> {{hotel.address}} , {{hotel.city}}
		         	    </li>
		         	</ul>
	         </div>
        </div> 
    </div>
    <script src="./app/js/app.js"></script>
    <script src="./app/js/controllers/searchController.js"></script>
    <script src="./app/js/services/searchService.js"></script>
    <script src="./app/js/constants/urlConfigConstants.js"></script>
    <script src=" https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> 
    <script src="./app/js/libs/jquery.ajax-cross-origin.min.js"></script>
  </body>
</html>

