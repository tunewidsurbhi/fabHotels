import React from "react";
import ResultItem from  './resultItem';
 
export default class SearchResults extends React.Component {
  render(){
        return <ResultItem headerClass={this.props.headerClass} headerText={this.props.headerText} resultObj={this.props.resultMap} />
       
    }
}
