import { FETCH_USER } from "../actions/types";

export default function (state = null, action) {
	//console.log(action);
	switch (action.type) {
		case FETCH_USER: // we don't want this return to take too long
			return action.payload || false;
		default:
			console.log("Still loading:", state);
			return state;
	}
}
