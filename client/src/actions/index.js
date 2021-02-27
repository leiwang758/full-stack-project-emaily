import axios from "axios"; //make ajax request
import { FETCH_USER } from "./types";

export const fetchUser = () => {
	return function (dispatch) {
		axios
			.get("/api/current_user")
			.then((res) => dispatch({ type: FETCH_USER, payload: res }));
	};

	// return {
	// 	type:FETCH_USER,
	// 	payload:request
	// };
};
