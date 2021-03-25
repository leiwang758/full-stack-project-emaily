import { FETCH_SURVEYS } from "../actions/types";

export default function (state = [], action) {
	//console.log(action);
	switch (action.type) {
		case FETCH_SURVEYS: // we don't want this return to take too long
			return action.payload;
		default:
			//console.log("Still loading:", state);
			return state;
	}
}
