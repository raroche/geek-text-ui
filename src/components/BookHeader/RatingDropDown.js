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
                <a href="/books/rating/0/1">Rating 0+</a>
                <a href="/books/rating/1/1">Rating 1+</a>
                <a href="/books/rating/2/1">Rating 2+</a>
                <a href="/books/rating/3/1">Rating 3+</a>
                <a href="/books/rating/4/1">Rating 4+</a>
                <a href="/books/rating/5/1">Rating = 5</a>
            </div>
        </div>
    );
};


export default RatingDropDown;