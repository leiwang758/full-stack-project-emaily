// allow us to simply import the reducer's directory
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
	auth: authReducer,
});
