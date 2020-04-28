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
                <a href="/books/Programming">Programming</a>
                <a href="/books/Robotics">Robotics</a>
                <a href="/books/Network">Network</a>
                <a href="/books/Artificial_Intelligence">Artificial Intelligence</a>
            </div>
        </div>
    );
};


export default GenreDropDown;