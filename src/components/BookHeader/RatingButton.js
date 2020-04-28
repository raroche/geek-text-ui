import React, { Component } from 'react';
import './RatingButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RatingDropDown from './RatingDropDown';

class RatingButton extends Component {
    constructor(props) {
        super(props);
        this.ratingMenuToggle = this.ratingMenuToggle.bind(this);
        this.state = {ratingMenuOpen: false};
    }

    ratingMenuToggle = () => {
        this.setState((prevState) => {
            return {ratingMenuOpen: !prevState.ratingMenuOpen}
        });
    };

    render() {
        const ratingMenuOpen = this.state.ratingMenuOpen;
        let dropdown;

        if (ratingMenuOpen) {
            dropdown = <RatingDropDown />;
        }

        return (
            <div>
                <button className="RatingButton" onClick={this.ratingMenuToggle} >Rating</button> 
                {dropdown}  
            </div>
        );
    };
}

export default RatingButton;