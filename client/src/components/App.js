import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"; // BR:brains, Route: set up rules
import { connect } from "react-redux";
import * as actions from "../actions";

// dummy components

//const Header = () => <h2>Header</h2>; dummy header
import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
// gonna be solely about css

class App extends Component {
	//ES6 class
	componentDidMount() {
		this.props.fetchUser();
		// WillMount
	}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/surveys" component={Dashboard} />
						<Route path="/surveys/new" component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(null, actions)(App); //connect react components to a redux store
// It provides its connected component with the pieces of the data it needs from the store,
// and the functions it can use to dispatch actions to the store.
