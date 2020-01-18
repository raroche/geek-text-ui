import React from 'react';
import PaymentOptions from '../PaymentOptions/PaymentOptions';
import ShippingOptions from '../ShippingOptions/ShippingOptions';
import UserInfo from '../UserInfo/UserInfo';
import './MyAccount.css';

const MyAccount = props => (

    <div className="myaccount">
        <div className="upper-box">
            <div className="title">Hi {props.loggedInStatus} </div>
            <UserInfo currentUser={props.currentUser} />
            
        </div>
        <div className="lower-box">
            <div className="payment-box">
                <div className="title">Payment Options</div>
                <PaymentOptions currentUser={props.currentUser} />
            </div>
            <div className="shipping-box">
                <div className="title">Shipping Options</div>
                <ShippingOptions currentUser={props.currentUser} />
            </div>
        </div>

    </div>
)

export default MyAccount;