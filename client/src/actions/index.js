// this is action creator
import axios from "axios"; //make ajax request
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post("/api/stripe", token);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values) => {
	return { type: "submit_survey" };
};
// return {
// 	type:FETCH_USER,
// 	payload:request
// };
