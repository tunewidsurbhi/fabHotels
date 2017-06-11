<?php

  header("Access-Control-Allow-Origin: *");

  include_once('../libraries/searchHotelsLibrary.php');

  $searchHotelsLib = new searchHotelsLibrary();
  $inputData = $_GET;

  if($inputData['method']){
  	 $method = $inputData['method'];
  	 $query = $inputData['query'];
  	 $searchHotelsLib->$method($query);
  }
?>