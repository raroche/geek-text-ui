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
      error: null,
      totalPages: 3,   //default value arbitrary
      genre: ''   
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
    if (params.sorting != undefined) address = address + (this.props.sorting) + (params.sorting);
    if (params.sorting != undefined && params.dir != undefined) address = address + (this.props.dir) + (params.dir);
    if (params.pageNo != undefined) address = address + (this.props.page) + (params.pageNo-1);
    
    
    
    
      

      fetch(`https://geek-text-team9.herokuapp.com/api/books${address}`)
        .then(response => {
          var total = parseInt(response.headers.get('Total-Pages'));
          this.setState({ totalPages: total });
        return response.json();
        })
        .then(data => {
          this.setState({ books: data });
          this.setState({genre: data[0].genre.name});
        })
        .catch(error => console.error(error));

      }

      /*if (response.ok) {
        const data = await response.json();
        const totalPages = response.headers.get('Totalpages');
        console.log(totalPages );
        this.setState({ books: data });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }*/
    
    

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
    var url = this.props.url;
    var address = url;

    if (params.genre != undefined) 
    {
      url = url + (params.genre) + '/';
      header = this.state.genre;
    }
    
    if (params.rating != undefined) {
      url = url + (params.rating) + '/'; 
      header = params.rating == 5 ? header + ' ' + params.rating : header + ' ' + params.rating + '+'
    }
    address = url;
    if (params.sorting != undefined) url = url + (params.sorting) + '/';
    if (params.sorting != undefined && params.dir != undefined) url = url + (params.dir) + '/';

    return (
      
      
      <div>
        <BookHeader address={address} pageNo = {params.pageNo}/>
        <div className="bookpage">
          <div className="books-title">
            <h1> The Book Store </h1>
            <h2> {header} </h2>
            <br />
          </div>
          <div className="pad">
            <BookSection data={this.state.books} pageNo = {params.pageNo} url = {url} total = {this.state.totalPages}/>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
function genreHeader(genre) {
  var header = "";
  if (genre === 1) header = "Programming";
  return 5;
}

export default BookPage;
