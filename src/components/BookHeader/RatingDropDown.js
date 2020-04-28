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
                <a href="/books/rating0">Rating 0+</a>
                <a href="/books/rating1">Rating 1+</a>
                <a href="/books/rating2">Rating 2+</a>
                <a href="/books/rating3">Rating 3+</a>
                <a href="/books/rating4">Rating 4+</a>
                <a href="/books/rating5">Rating = 5</a>
            </div>
        </div>
    );
};


export default RatingDropDown;