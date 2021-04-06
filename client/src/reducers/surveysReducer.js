import { FETCH_SURVEYS, DELETE_SURVEYS } from "../actions/types";

export default function (state = [], action) {
	//debugger;
	//console.log(action);
	switch (action.type) {
		case FETCH_SURVEYS: // we don't want this return to take too long
			return action.payload;

		case DELETE_SURVEYS:
			return state.filter((survey) => survey._id != action.id);

		default:
			//console.log("Still loading:", state);
			return state;
	}
}
