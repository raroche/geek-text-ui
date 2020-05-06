import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import ReviewStars from "../ReviewStars/ReviewStars";

export default function BookCard(props) {
  const reviews = props.book.reviews;
  const totalReviews = reviews.length;

  let avgRating = calculateAvgRating(reviews, totalReviews);

  return (
    <NavLink
      exact
      to={"/book/" + props.book.id}
      style={{ textDecoration: "none" }}
    >
      <div className="mt-4 mb-2 ml-2 mr-2">
        <Card
          style={{
            width: "18rem",
            height: "auto",
            backgroundColor: "transparent",
            padding: "25px",
            // borderRadius: "10px",
            border: "none",
            // boxShadow: "0px 0px 27px -10px rgba(117,117,117,1)",
          }}
        >
          <Card.Img
            variant="top"
            src={props.book.img_url}
            width="200px"
            height="auto"
            style={{
              boxShadow: "5px 5px 29px -2px rgba(117,117,117,1)",
              marginBottom: "15px",
            }}
          />
          <Card.Body
            style={{ color: "rgb(22, 35, 56)", padding: "10px 0px 0px 0px" }}
          >
            <Card.Title>{props.book.title}</Card.Title>
            <Card.Text>
              <ReviewStars totalReviews={totalReviews} avgRating={avgRating} />
            </Card.Text>
            <Card.Text>Price: {props.book.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </NavLink>
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
