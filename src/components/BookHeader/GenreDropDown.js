import React from 'react';
import './GenreDropDown.css';


const GenreDropDown = props => {
    let genreClasses = 'genreDropDown';

    if(props.show) {
        genreClasses = 'genreDropDown open';
    }

    return (
        <div className={genreClasses}>
            <div className="dropdown-genre">
                <a href="/books/genre/1/1">Programming</a>
                <a href="/books/genre/2/1">Robotics</a>
                <a href="/books/genre/3/1">Network</a>
                <a href="/books/genre/4/1">Artificial Intelligence</a>
            </div>
        </div>
    );
};


export default GenreDropDown;