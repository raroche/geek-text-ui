import React, { Component } from "react";
import BookCard from "../BookCard/BookCard";
import CardDeck from "react-bootstrap/CardDeck";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

export default function BooksGrid(props) {
  return (
    <div className="mt-5">
      <CardDeck className="justify-content-md-center">
        {props.loading ? (
          <div>
            <Alert variant="danger">
              <Alert.Heading>
                Data is being fetch from Heroku Spring Boot App. <br></br>We are
                using the free plan which goes to sleep when inactive, the first
                fetch could take a few minutes.
              </Alert.Heading>
            </Alert>
            <div class="col-xs-1" align="center">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
            </div>
          </div>
        ) : props.data ? (
          props.data.map(book => <BookCard book={book} key={book.id} />)
        ) : (
          undefined
        )}
      </CardDeck>
    </div>
  );
}
