import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const formValid = registerErrors => {
  let valid = true;
  Object.values(registerErrors).forEach(val => {
    if (val.length > 1 || val === "") {
      valid = false;
    }
  });
  return valid;
};

class AddPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card_nickname: "",
      card_number: "",
      expiration: "",
      exp_month: "",
      exp_year: "",
      cvv: "",
      registerErrors: {
        card_nickname: "",
        card_number: "",
        exp_month: "",
        exp_year: "",
        cvv: ""
      }
    };
    this.updatePayment = this.updatePayment.bind(this);
    this.submitPayment = this.submitPayment.bind(this);
  }

  updatePayment = e => {
    this.setState({
      [e.target.id]: e.target.value,
      expiration: this.state.exp_month + "/" + this.state.exp_year
    });
    const { id, value } = e.target;
    let registerErrors = this.state.registerErrors;

    switch (id) {
      case "card_nickname":
        registerErrors.card_nickname =
          value.length < 2 ? "Minimum of two characters required." : "";
        break;
      case "card_number":
        registerErrors.card_number =
          value.length === 16 ? "" : "A credit card has 16 digits";
        break;
      case "exp_month":
        registerErrors.exp_month =
          value > 0 && value < 13 ? "" : "Insert valid month";
        break;
      case "exp_year":
        registerErrors.exp_year =
          value > 2019 && value < 2024 ? "" : "Insert valid year.";
        break;
      case "cvv":
        registerErrors.cvv = value.length === 3 ? "" : "Insert valid cvv.";
        break;
      default:
        break;
    }
  };

  submitPayment = e => {
    e.preventDefault();

    const url = "https://geek-text-team9.herokuapp.com/api/users/";
    var currentUser = this.props.currentUser; //user id
    const payments = "/payments/";

    fetch(url + currentUser + payments, {
      method: "post",
      body: JSON.stringify({
        card_nickname: this.state.card_nickname,
        card_number: this.state.card_number,
        exp_month: this.state.exp_month,
        exp_year: this.state.exp_year,
        cvv: this.state.cvv
      }),
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

    this.props.addPayment(this.state);
  };

  render() {
    const { registerErrors } = this.state;
    return (
      <form onSubmit={this.submitPayment}>
        <div className="input-group">
          <label htmlFor="card_nickname">Card Name</label>
          <input
            type="text"
            id="card_nickname"
            onChange={this.updatePayment}
            className="login-input"
            placeholder="My Card"
          />
        </div>
        {registerErrors.card_nickname.length > 0 ? (
          <div className="errorMessage">{registerErrors.card_nickname}</div>
        ) : this.state.card_nickname.length > 0 ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
        ) : (
          ""
        )}

        <div className="input-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="card_number"
            onChange={this.updatePayment}
            className="login-input"
            placeholder="1111222233334444"
          />
        </div>
        {registerErrors.card_number.length > 0 ? (
          <div className="errorMessage">{registerErrors.card_number}</div>
        ) : this.state.card_number.length > 0 ? (
          <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
        ) : (
          ""
        )}

        <div className="input-group">
          <label htmlFor="expiration">Expiration</label>
          <input
            type="text"
            id="exp_month"
            onChange={this.updatePayment}
            className="login-input"
            placeholder="01"
          />{" "}
          {registerErrors.exp_month.length > 0 ? (
            <div className="errorMessage">{registerErrors.exp_month}</div>
          ) : this.state.exp_month.length > 0 ? (
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
          ) : (
            ""
          )}
          /
          <input
            type="text"
            id="exp_year"
            onChange={this.updatePayment}
            className="login-input"
            placeholder="20"
          />
          {registerErrors.exp_year.length > 0 ? (
            <div className="errorMessage">{registerErrors.exp_year}</div>
          ) : this.state.exp_year.length > 0 ? (
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
          ) : (
            ""
          )}
        </div>

        <div className="input-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            onChange={this.updatePayment}
            className="login-input"
            placeholder="123"
          />
          {registerErrors.cvv.length > 0 ? (
            <div className="errorMessage">{registerErrors.cvv}</div>
          ) : this.state.cvv.length > 0 ? (
            <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
          ) : (
            ""
          )}
        </div>
        <button
          type="button"
          onClick={this.submitPayment}
          className="login-btn"
        >
          Add Payment
        </button>
      </form>
    );
  }
}

export default AddPayment;
