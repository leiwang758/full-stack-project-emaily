import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom"; // BR:brains, Route: set up rules
import { connect } from "react-redux";
import * as actions from "../actions";

// dummy components

//const Header = () => <h2>Header</h2>; dummy header
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

//const Dashboard = () => <h2>Dashboard</h2>;
//const SurveyNew = () => <h2>SurveyNew</h2>;

// const Landing = () => <h2>Landing</h2>;

// gonna be solely about css

class App extends Component {
	//ES6 class
	componentDidMount() {
		//
		this.props.fetchUser();
	}
	// WillMount
	//is invoked immediately after a component is mounted (inserted into the tree).
	//Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint,
	//this is a good place to instantiate the network request.

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div className="container">
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
