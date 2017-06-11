import React from "react";
 
export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h3 >Welcome to Fab Hotels </h3>
        <ul className="siteHeader">
	      <li><a href="#">Home</a></li>
	      <li><a href="#">Bookings</a></li>
	      <li><a href="#">Services</a></li>
	      <li><a href="#">About</a></li>
	      <li><a href="#">Contact</a></li>
        </ul>
      </header>
    );
  }
}