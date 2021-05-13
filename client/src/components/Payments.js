import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import "font-awesome/css/font-awesome.min.css";
import { size } from "lodash";

class Payments extends Component {
  render() {
    // amount: US-dollar cents, token: expect a callback after auth payment, poorly called
    //debugger; // see the actual js code generated by this
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn" style={{ width: "100px", fontSize: "50%" }}>
          <i className={"fa fa-sign-out"} /> add credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
