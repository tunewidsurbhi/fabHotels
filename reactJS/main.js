import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./js/layout/header";
import SearchComponent from "./js/components/searchComponent"; 

const rootElem = document.getElementById('root'); 

ReactDOM.render(
	<div>
		<Header />
		<SearchComponent />
	</div>
	,  document.getElementById('root')
	);