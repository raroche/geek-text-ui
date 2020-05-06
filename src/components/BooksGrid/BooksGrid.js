import React, { Component } from "react";
import BookCard from "../BookCard/BookCard";
import CardDeck from "react-bootstrap/CardDeck";
import Book from "../Book/Book";
import './BooksGrid.css';

export default function BooksGrid(props) {
  return (
    <div className="featured" >
          {props.data.map(book => props.data ? <Book book={book} key={book.id}/>: undefined )}
        </div>
  );
}
