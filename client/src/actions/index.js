// this is action creator
import axios from "axios"; //make ajax request
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get("/api/current_user");
	dispatch({ type: FETCH_USER, payload: res.data });
};

// return {
// 	type:FETCH_USER,
// 	payload:request
// };