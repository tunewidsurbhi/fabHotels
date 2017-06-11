import React from "react";
import ReactDOM from "react-dom";
 
export default class SearchBox extends React.Component {
  render(){
        return (
            <div>
                <input type="text" id="searchInput" placeholder="Search..." ref="query" onChange={this.searchLocationsAndHotels.bind(this)}/>
            </div>
        );
    }
  searchLocationsAndHotels(){
        var query  =  ReactDOM.findDOMNode(this.refs.query).value,
         locSearchURL =  'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+query+'&location=28.7041,77.1025&key=AIzaSyBC7_p3Ag0PHYrD8nN-deOVDk3scjLSb-U',
         hotelSearchURL = 'https://localhost/fabHotels/api/controllers/searchHotelsController.php?query='+query+'&method=searchHotels';
        this.props.searchLocations(locSearchURL);
        this.props.searchHotels(query);

    }
}
