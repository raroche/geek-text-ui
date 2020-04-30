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
        <Route exact path="/books" render={props => <BookPage {...props} address= ''  header='All Books' /> } />
        <Route path="/books/top" render={props => <BookPage {...props} address= 'top/'  header='Top Sellers' /> } />  
        <Route path="/books/Programming" render={props => <BookPage {...props} address= 'programming/'  header='Programming' /> } />
        <Route path="/books/Robotics" render={props => <BookPage {...props} address= 'robotics/'  header='Robotics' /> } />
        <Route path="/books/Network" render={props => <BookPage {...props} address= 'network/'  header='Network' /> } />
        <Route path="/books/Artificial_Intelligence" render={props => <BookPage {...props} address= 'AI/'  header='Artificial Intelligence' /> } />
        <Route path="/books/rating0" render={props => <BookPage {...props} address= 'rating0/'  header='Rating 0+' /> } />
        <Route path="/books/rating1" render={props => <BookPage {...props} address= 'rating1/'  header='Rating 1+' /> } />
        <Route path="/books/rating2" render={props => <BookPage {...props} address= 'rating2/'  header='Rating 2+' /> } />
        <Route path="/books/rating3" render={props => <BookPage {...props} address= 'rating3/'  header='Rating 3+' /> } />
        <Route path="/books/rating4" render={props => <BookPage {...props} address= 'rating4/'  header='Rating 4+' /> } />
        <Route path="/books/rating5" render={props => <BookPage {...props} address= 'rating5/'  header='Rating 5' /> } />
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
