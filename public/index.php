<html>
  <head>
    <title>Fab Hotels Search</title>
    <link rel="stylesheet" type="text/css" href="app/css/main.css" />
    <base href="http://localhost/angularAssignments/fabHotelsAssignment/" />
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
  </head>
  <body>
    <div ng-app="fabHotelSearch"> 
        <div ng-controller="searchController" >
             <span class="searchIcon"><i class="fa fa-search"></i></span>
	         <input type="text" ng-model="keyword" id="searchInput" placeholder="Search..."/>
	         <div ng-if="resultsReady">
		         	<ul class='searchUL'>
		         	    <li class="header"> Locations </li>
		         	    <li ng-repeat="location in locationsResult">
		         	        <b> {{location.name}} </b> {{location.formatted_address}}
		         	    </li>
		         	</ul>
		         	<ul class="searchUL">
		         	    <li class="header"> Hotels </li>
		         	    <li ng-repeat="hotel in hotelsResult">
		         	    	 <b> {{hotel.name}} </b> {{hotel.address}} , {{hotel.city}}
		         	    </li>
		         	</ul>
	         </div>
        </div> 
    </div>
    <script src="public/app/js/app.js"></script>
    <script src="public/app/js/controllers/searchController.js"></script>
    <script src="public/app/js/services/searchService.js"></script>
    <script src="public/app/js/constants/urlConfigConstants.js"></script>
  </body>
</html>

