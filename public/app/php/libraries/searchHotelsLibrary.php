<?php

    // include_once('./constants/hotelConstants.php');
    // global $hotelConstants;
 
  class searchHotelsLibrary{
     public function searchHotels($query){
     	// include_once('./constants/hotelConstants.php');
     	// global $hotelConstants;
     	$hotelConstant = ['Grand_View'=>['name'=>'Hotel Grand View',
                                   'city'=> 'New Delhi',
                                   'address'=>'Preet Vihar'],
                         'Heritage'=>['name'=>'HoteFl Heritage',
                                   'city'=>'New Delhi',
                                   'address'=>'Udyog Vihar'],
                         'Marine_View'=>['name'=>'Hotel Marine View',
                                   'city'=>'New Delhi',
                                   'address'=>'Preet Vihar']];                                                 

        $results = [];
     	foreach ($hotelConstant as $hotel => $details) {
				if( stripos( $details['name'], $query ) !== false ) {
				    $results[] = $details;
				}
     	}
        echo json_encode($results);
     }
  
  }

?>