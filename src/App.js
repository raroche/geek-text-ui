import React, { Component } from "react";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookPage from "./components/BookPage/BookPage";
import BookDetails from "./components/BookDetails/BookDetails";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import MyAccount from "./components/MyAccount/MyAccount";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "Sign in.",
      userId: null,
      user: {}
    };
    this.handleLoginStatus = this.handleLoginStatus.bind(this);
    this.handleLogoutStatus = this.handleLogoutStatus.bind(this);
  }

  componentWillMount() {
    //pull from local storage
    localStorage.getItem("loggedInUser") &&
      this.setState({
        user: JSON.parse(localStorage.getItem("loggedInUser"))
      });
    localStorage.getItem("userId") &&
      this.setState({
        userId: JSON.parse(localStorage.getItem("userId"))
      });
    localStorage.getItem("loggedInStatus") &&
      this.setState({
        loggedInStatus: JSON.parse(localStorage.getItem("loggedInStatus"))
      });
  }

  componentWillUpdate(nextProps, nextState) {
    //save to local storage
    localStorage.setItem("loggedInUser", JSON.stringify(nextState.user));
    localStorage.setItem("userId", JSON.stringify(nextState.userId));
    localStorage.setItem(
      "loggedInStatus",
      JSON.stringify(nextState.loggedInStatus)
    );
    localStorage.setItem("stateTime", Date.now()); //time-stamp
  }

  handleLoginStatus(data) {
    this.setState({
      loggedInStatus: data.first_name,
      userId: data.id,
      user: data
    });
  }

  handleLogoutStatus() {
    this.setState({
      loggedInStatus: "Sign in.",
      userId: null,
      user: {}
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" render={props => <Header {...props} loggedInStatus={this.state.loggedInStatus} handleLogoutStatus={this.handleLogoutStatus} /> } />
        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route path="/login" render={props => <LoginRegister {...props} handleLoginStatus={this.handleLoginStatus} /> } />
        <Route path="/myaccount" render={props => <MyAccount {...props} currentUser={this.state.userId} loggedInStatus={this.state.loggedInStatus} /> } />
        <Route path="/bookgrid" component={BooksGrid} />
        <Route path="/cart" component={Cart} />
        {/* With pagination */}
        <Route exact path="/books/all/:pageNo" render={props => ( <BookPage {...props} address= '/' page='?pageNo=' header='All Books' url = '/books/all/'/> )} />
        <Route exact path="/books/top/:pageNo" render={props => <BookPage {...props} address= '/top/' page='?pageNo=' header='Top Sellers' url = '/books/top/' /> } />  
        <Route exact path="/books/genre/:genre/:pageNo" render={props => <BookPage {...props} address= '/genre/?genre=' page='&&pageNo='  header='Genre' url = '/books/genre/' /> } /> 
        <Route exact path="/books/rating/:rating/:pageNo" render={props => <BookPage {...props} address= '/rating/?rating=' page='&&pageNo='  header='Rating' url = '/books/rating/' /> } />  
        {/* With Sorting */}
        <Route exact path="/books/all/:sorting/:pageNo" render={props => ( <BookPage {...props} address= '/' sorting = '?sortBy=' page='&&pageNo=' header='All Books' url = '/books/all/'/> )} />
        <Route exact path="/books/top/:sorting/:pageNo" render={props => <BookPage {...props} address= '/top/' sorting = '?sortBy=' page='&&pageNo=' header='Top Sellers' url = '/books/top/' /> } />  
        <Route exact path="/books/genre/:genre/:sorting/:pageNo" render={props => <BookPage {...props} address= '/genre/?genre=' sorting = '&&sortBy=' page='&&pageNo='  header='Genre' url = '/books/genre/' /> } /> 
        <Route exact path="/books/rating/:rating/:sorting/:pageNo" render={props => <BookPage {...props} address= '/rating/?rating=' sorting = '&&sortBy=' page='&&pageNo='  header='Rating' url = '/books/rating/' /> } />  
        {/* With Sorting Ascending direction */}
        <Route exact path="/books/all/:sorting/:dir/:pageNo" render={props => ( <BookPage {...props} address= '/' sorting = '?sortBy=' dir = '&&dir=' page='&&pageNo=' header='All Books' url = '/books/all/'/> )} />
        <Route exact path="/books/top/:sorting/:dir/:pageNo" render={props => <BookPage {...props} address= '/top/' sorting = '?sortBy=' dir = '&&dir=' page='&&pageNo=' header='Top Sellers' url = '/books/top/' /> } />  
        <Route exact path="/books/genre/:genre/:sorting/:dir/:pageNo" render={props => <BookPage {...props} address= '/genre/?genre=' sorting = '&&sortBy=' dir = '&&dir=' page='&&pageNo='  header='Genre' url = '/books/genre/' /> } /> 
        <Route exact path="/books/rating/:rating/:sorting/:dir/:pageNo" render={props => <BookPage {...props} address= '/rating/?rating=' sorting = '&&sortBy=' dir = '&&dir=' page='&&pageNo='  header='Rating' url = '/books/rating/' /> } />  

        <Route
          path="/wishlist"
          render={props => (
            <WishList
              {...props}
              loggedInStatus={this.state.loggedInStatus}
              user={this.state.user}
            />
          )}
        />
        <Route
          path="/book/:bookId"
          render={props => (
            <BookDetails
              {...props}
              loggedIn={this.state.loggedInStatus}
              user={this.state.user}
            />
          )}
        />
        <Route path="/author/:authorId" component={AuthorDetails} />
        <Route path="/" component={Footer} />
      </BrowserRouter>
    );
  }
}

export default App;
