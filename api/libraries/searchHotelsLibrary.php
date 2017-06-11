<?php
     include_once('../constants/searchConstants.php');
  
  class searchHotelsLibrary{

     public function searchHotels($query){
     	   global $hotelConstants;
         $results = [];
         	foreach ($hotelConstants as $hotel => $details) {
      			if( stripos( $details['name'], $query ) !== false ) {
      			    $results[] = $details;
      			}
         	}
         echo json_encode($results);
     }
  
  }

?>