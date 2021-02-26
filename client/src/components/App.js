import React from "react";
import { BrowserRouter, Route } from "react-router-dom"; // BR:brains, Route: set up rules

// dummy components

//const Header = () => <h2>Header</h2>; dummy header
import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
// gonna be solely about css
const App = () => {
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
};

export default App;
