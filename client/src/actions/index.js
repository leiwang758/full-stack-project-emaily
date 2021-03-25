// this is action creator
import axios from "axios"; //make ajax request
import { FETCH_USER, FETCH_SURVEYS } from "./types";

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post("/api/stripe", token);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async (dispatch) => {
	//console.log("here");
	const res = await axios.post("/api/surveys", values);
	history.push("/surveys");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
	const res = await axios.get("api/surveys");
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
// return {
// 	type:FETCH_USER,
// 	payload:request
// };
