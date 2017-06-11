 import React from "react";
 export default class ResultItem extends React.Component {

 render(){
 	    
        var resultItems = this.props.resultObj.map(function(result){
             return <li className="marker" key={result.id}><b>{result.name}</b>,{result.formatted_address}</li>;
        });
         
        return(
 	    <ul className='searchUL'>
     	    <li className={this.props.headerClass}> {this.props.headerText}</li>
     	    {resultItems}
		</ul>);
    }
}    
