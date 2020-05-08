import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Book.css';
import ReviewStars from "../BookStars/BookStars";

export default function Book(props) {
  const reviews = props.book.reviews;
  const totalReviews = reviews.length;

  let avgRating = calculateAvgRating(reviews, totalReviews);

  return (
      <div className = "card">
        <div className = "link">
          <NavLink exact to={"/book/" + props.book.id} > 
            <img src={props.book.img_url} width="200px" height = "250px" />
          </NavLink>
        </div>
        <div className = "title">
          <p > 
            {shortTitle (props.book.title)}    </p>
        </div>
          <p > 
             <ReviewStars totalReviews={totalReviews} avgRating={avgRating} /> <br/>
            Price: ${props.book.price} <br/>
            Author: {props.book.author}
          </p>
        
        
      </div>
  );
}

function calculateAvgRating(reviews, totalReviews) {
  let sum = 0;

  for (let counter = 0; counter < totalReviews; counter++) {
    let review = reviews[counter];
    sum += review.rating;
  }
  return parseInt(sum, 10) / totalReviews;
}

function shortTitle (title) {
  let lastSpace = 0;
  if (title.length > 47) {                    //44 is about the size for two lines, I dont want it to go over 2 lines for formatting reasons
    title = title.slice(0,47)
    lastSpace = title.lastIndexOf(' ');
    title = title.slice(0, lastSpace) + "...";
  }
  return title;
}

      
        
      
   



