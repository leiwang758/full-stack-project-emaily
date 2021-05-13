import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"; // react-router-dom -> react router
import Payments from "./Payments";
import "font-awesome/css/font-awesome.min.css";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li>
            <a href="/auth/google"> Login with Google</a>
          </li>,
          "please",
        ];
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">
              <i className={"fa fa-sign-out"} />
              Logout
            </a>
          </li>,
        ];
    }
  }

  render() {
    //console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily by Lei
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
// Link: Navigate to a different route rendered by React Router
// a:

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
//mapStateToProps and mapDispatchToProps deal with Redux store's state and dispatch.
// <li>
// 							<a> Login With Google</a>
// 						</li>
