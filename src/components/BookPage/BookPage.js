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
    let {
      match: { params }
    } = this.props;

    if (params.genre != undefined) address = address + (params.genre);
    if (params.rating != undefined) address = address + (params.rating);
    if (params.pageNo != undefined) address = address + (this.props.page) + (params.pageNo-1);
    
    
    
    try {
      

      const response = await fetch(
        `https://geek-text-team9.herokuapp.com/api/books${address}`
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
    let {
      match: { params }
    } = this.props;
    var header = this.props.header;
    var address = this.props.url+params.pageNo;
    var url = this.props.url;

    if (params.genre != undefined) url = url + (params.genre) + '/';
    if (params.rating != undefined) url = url + (params.rating) + '/';

    return (
      
      <div>
        <BookHeader address={address}/>
        <div className="bookpage">
          <div className="books-title">
            <h1> The Book Store </h1>
            <h2> {header} </h2>
            <br />
          </div>
          <div className="pad">
            <BookSection data={this.state.books} pageNo = {params.pageNo} url = {url}/>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default BookPage;
