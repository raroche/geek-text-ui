import React, { Component } from "react";
import './BookHeader.css';
import GenreButton from './GenreButton';
import SortButton from './SortButton';
import RatingButton from './RatingButton';
import { Link } from 'react-router-dom';


class BookHeader extends Component {
    constructor(props) {
      super(props);
  
    }
    render(){
        return(

            <nav className="nav">
                <div className="content"> 
                    <GenreButton/> 
                    <Link to="/books/top/1">Top Sellers</Link>
                    <RatingButton/>
                    <SortButton address={this.props.address} pageNo = {this.props.pageNo}/>
                </div>
                

            </nav>


);
}
}

    export default BookHeader;
