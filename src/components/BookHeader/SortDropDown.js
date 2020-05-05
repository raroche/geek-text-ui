import React, { Component } from "react";
import './SortDropDown.css';


class SortDropDown extends Component {
    constructor(props) {
      super(props);
  
    }
    render(){
        
        let sortClasses = 'sortDropDown';

        if(this.props.show) {
            sortClasses = 'sortDropDown open';
        }

        return (
            <div className={sortClasses}>
                <div className="dropdown-sort">
                    <a href = {`${this.props.address}title/1/${this.props.pageNo}`}> Book Title (Alphabetically)</a>
                    <a href = {`${this.props.address}author/1/${this.props.pageNo}`}> Author (Alphabetically)</a>
                    <a href = {`${this.props.address}price/1/${this.props.pageNo}`}> Price (Low to High)</a>
                    <a href = {`${this.props.address}price/${this.props.pageNo}`}> Price (High to Low)</a>
                    <a href = {`${this.props.address}${this.props.pageNo}`}> Book Rating</a>
                    <a href = {`${this.props.address}date/1/${this.props.pageNo}`}> Release date (Oldest)</a>
                    <a href = {`${this.props.address}date/${this.props.pageNo}`}> Release date (Newest)</a>
                </div>
            </div>
        );
};
}


export default SortDropDown;