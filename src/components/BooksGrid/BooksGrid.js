import React, { Component } from "react";
import BookCard from "../BookCard/BookCard";
import CardDeck from "react-bootstrap/CardDeck";
import Alert from "react-bootstrap/Alert";

export default function BooksGrid(props) {
  return (
    <div className="mt-5">
      <CardDeck className="justify-content-md-center">
        {props.loading ? (
          <Alert variant="danger">
            Data is being fetch from Heroku Spring Boot App, We are using the
            free plan which goes to sleep when inactive, the first fetch could
            take a few minutes.
          </Alert>
        ) : props.data ? (
          props.data.map(book => <BookCard book={book} key={book.id} />)
        ) : (
          undefined
        )}
      </CardDeck>
    </div>
  );
}
