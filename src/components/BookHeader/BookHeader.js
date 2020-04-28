import React from 'react';
import './BookHeader.css';
import GenreButton from './GenreButton';
import SortButton from './SortButton';
import RatingButton from './RatingButton';
import { Link } from 'react-router-dom';


const BookHeader = props => (
    <nav className="nav">
        <div className="content"> 
            <GenreButton/> 
            <Link to="/books/top">Top Sellers</Link>
            <RatingButton/>
            <SortButton/>
        </div>
        

    </nav>

)



export default BookHeader;

//<Link to="/books/rating">Rating</Link>