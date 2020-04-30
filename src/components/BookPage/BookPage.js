import React, { Component } from "react";
import BookSection from "../BookSection/BookSection";
import "./BookPage.css";
import BookHeader from "../BookHeader/BookHeader";

class BookPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      loading: false,
      error: null
    };

    this.fetchBooks = this.fetchBooks.bind(this);

    
    
  }
  async fetchBooks() {
    var address = this.props.address;
    
    console.log({address});
    try {

      const response = await fetch(
        `https://geek-text-team9.herokuapp.com/api/books/${address}`
      );

        

      if (response.ok) {
        const data = await response.json();
        this.setState({ books: data });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    this.fetchBooks();
    this.setState({ loading: false });
  }
  render() {
    var header = this.props.header;
    return (
      
      <div>
        <BookHeader />
        <div className="bookpage">
          <div className="books-title">
            <h1> The Book Store </h1>
            <h2> {header} </h2>
            <br />
          </div>
          <div class="pad">
            <BookSection data={this.state.books} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default BookPage;
