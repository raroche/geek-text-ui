import React, { Component } from "react";
import BookGrid from "../BooksGrid/BooksGrid";
import "./HomePage.css";
import MainBanner from "../MainBanner/MainBanner";
import Alert from "react-bootstrap/Alert";

class HomePage extends Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
      loading: false,
      error: null
    };

    // Binding methods to class
    this.fetchFeaturedBooks = this.fetchFeaturedBooks.bind(this);
  }

  // Fetch a book from the API.
  async fetchFeaturedBooks() {
    this.setState({ ...this.state, loading: true });
    try {
      const response = await fetch(
        "https://geek-text-team9.herokuapp.com/api/"
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ ...this.state, books: data });
        this.setState({ ...this.state, isLoading: false });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.error(error);
    }
  }

  async componentDidMount() {
    this.setState({ ...this.state, loading: true });
    this.fetchFeaturedBooks();
    this.setState({ ...this.state });
  }

  render() {
    return (
      <div>
        <MainBanner />
        <div className="homepage">
          <div className="home-title">
            <h2>Featured Books</h2>
            <br />
          </div>
          {this.state.error ? (
            <Alert variant="danger">
              Error: Unable to fetch Book data from API.
            </Alert>
          ) : null}

          <BookGrid data={this.state.books} loading={this.state.loading} />
          <br />
        </div>
      </div>
    );
  }
}

export default HomePage;
