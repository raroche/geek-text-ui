import React from 'react';
import './RatingDropDown.css';


const RatingDropDown = props => {
    let ratingClasses = 'ratingDropDown';

    if(props.show) {
        ratingClasses = 'ratingDropDown open';
    }

    return (
        <div className={ratingClasses}>
            <div className="dropdown-rating">
                <a href="/books/rating/0">Rating 0+</a>
                <a href="/books/rating/1">Rating 1+</a>
                <a href="/books/rating/2">Rating 2+</a>
                <a href="/books/rating/3">Rating 3+</a>
                <a href="/books/rating/4">Rating 4+</a>
                <a href="/books/rating/5">Rating = 5</a>
            </div>
        </div>
    );
};


export default RatingDropDown;