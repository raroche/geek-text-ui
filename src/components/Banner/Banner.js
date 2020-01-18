import React, { Component } from "react";
import BannerPhoto from "./BannerPhoto";

function BannerCard(props) {
  console.log(props.title);
  return (
    <div class="col-sm">
      <div class="card text-center">
        <div class="card-body">
          <BannerPhoto cover={props.cover} />
          <h5 class="card-title"> {props.title} </h5>
        </div>
      </div>
    </div>
  );
}

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      book: []
    };
  }

  componentDidMount() {
    fetch("https://geek-text-team9.herokuapp.com/api/books/1")
      .then(response => response.json())
      .then(data => {
        this.setState({ book: data });
      });
  }

  render() {
    console.log(this.state.book);
    //let bannerCard = this.state.book.map(item => (
    //<BannerCard
    // key={this.state.book.id}
    // cover={this.state.book.img_url}
    //  title={this.state.book.title}
    ///>;
    //));
    return (
      <div
        class="jumbotron jumbtron-fluid-sm transparent"
        style={{ height: "50" }}
      >
        <h1>Recent Releases</h1>
        <div class="row">
          <BannerCard
            key={this.state.book.id}
            cover={this.state.book.img_url}
            title={this.state.book.title}
          />
        </div>
      </div>
    );
  }
}

export default Banner;
