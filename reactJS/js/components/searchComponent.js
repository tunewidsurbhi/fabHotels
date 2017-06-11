import React from "react";
import SearchBox from "./searchBox"; 
import SearchResults from "./searchResults";
 
export default class searchComponent extends React.Component {
 
    constructor() {
	    super(); 
	    this.state = {
	      locResults: [],
	      hotelResults:[]
	    }
    }


    searchForHotels(searchKeyword) {
	    $.get("http://localhost/fabHotels/api/controllers/searchHotelsController.php", {
	        query: searchKeyword,
	        method: 'searchHotels'
	      },
	      function(response){
	        response = JSON.parse(response);
	        this.setState({'hotelResults':response}); 
	      }.bind(this)
        );
	}
    
    searchForLocations(URL){
        $.ajax({
            type: "GET",
            crossOrigin: true,
            url: URL,
            success: function(response){
            	response = JSON.parse(response);
                this.setState({'locResults':response.results}); 
            }.bind(this)
        });	
    }

    render(){
        return (
            <div>
                <SearchBox searchLocations={this.searchForLocations.bind(this)} searchHotels={this.searchForHotels.bind(this)} />
                <SearchResults headerClass="header marker" headerText="Locations" resultMap={this.state.locResults} />
                <SearchResults headerClass="header building" headerText="Hotels" resultMap={this.state.hotelResults} />
            </div>
        );
    }
}
