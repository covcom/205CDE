<?php

require(APPPATH.'libraries/REST_Controller.php');

class Persons extends REST_Controller {
	
	// GET method implementation for .../Persons/list
	function list_get() {

		// establish connection to MongoDB server
		$connection = new MongoClient();

		// select database
		$db = $connection->company;

		// select collection 
		$collection = $db->persons;

		// retrieve all items in collection
		$cursor = $collection->find();

		if($cursor->hasNext())
		{
    		echo json_encode(iterator_to_array($cursor));
		}	
		
		// close connection
		$connection->close();
	}
}

?>
