import React, { Component } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  Dropdown,
  SplitButton
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";

class WishlistCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Books: props.Books,
      handleDelete: props.handleDelete,
      handleMove: props.handleMove,
      handleMoveToCart: props.handleMoveToCart,
      Options: props.Options
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      Books: nextProps.Books,
      Options: nextProps.Options
    });
  }

  render() {
    if (this.state.Books.length === 0) {
      return (
        <Card
          className="wishlist-cards"
          style={{
            top: "80px",
            width: "800px",
            left: "30%"
          }}
        >
          <Card.Body>
            <h1> List is empty </h1>
          </Card.Body>
        </Card>
      );
    } else {
      let listcard = this.state.Books.map(item => (
        <div>
          <Card
            className="wishlist-cards"
            style={{
              top: "80px",
              width: "800px",
              left: "30%",
              height: "200px"
            }}
          >
            <Card.Body>
              <img
                src={item.img_url}
                height="150"
                width="100"
                padding="20px"
                alt="book cover"
              />
              <ButtonToolbar
                style={{
                  position: "absolute",
                  right: "70px",
                  top: "80px"
                }}
              >
                <Dropdown title="Move-to-list">
                  <Dropdown.Toggle variant="primary" id="dropdown-change-list">
                    Change List
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {this.state.Options.map(option => (
                      <Dropdown.Item
                        value={option.listid}
                        onClick={e =>
                          this.state.handleMove(option.listid, item.id)
                        }
                      >
                        {option.listName}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </ButtonToolbar>
              <Button
                title="Move to Cart"
                style={{
                  position: "absolute",
                  right: "138px",
                  top: "120px"
                }}
                onClick={e => this.state.handleMoveToCart()}
              >
                <img
                  src="https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Cart-512.png"
                  height="25"
                />
              </Button>
              <Button
                style={{
                  position: "absolute",
                  right: "85px",
                  top: "120px"
                }}
                onClick={e => this.state.handleDelete(item.id)}
              >
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_55372.png"
                  height="25"
                />
              </Button>
              <br />
              <Card.Text
                className="text-center"
                style={{
                  position: "absolute",
                  top: "70px",
                  left: "150px",
                  maxWidth: "350px"
                }}
              >
                <p1
                  style={{
                    fontweight: "bold",
                    maxWidth: "10px"
                  }}
                >
                  {item.title}
                </p1>
                {item.author}
                <br />${item.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ));
      return listcard;
    }
  }
}

export default WishlistCards;
