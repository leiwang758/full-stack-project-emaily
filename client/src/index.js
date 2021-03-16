// render root components to the dom. ES2015 module (import)
import "materialize-css/dist/css/materialize.min.css"; //no need to specify a relative path
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"; // allow us to manually dispatch the actions

import App from "./components/App";
import reducers from "./reducers";
import axios from "axios";
window.axios = axios;
// use aixos in browser console

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

// console.log("STRIPE KEY IS ", process.env.REACT_APP_STRIPE_KEY);
// console.log("Environment is ", process.env.NODE_ENV);
