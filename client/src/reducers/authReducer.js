export default function (state = {}, action) {
	console.log(action);
	switch (action.type) {
		default:
			console.log(state);
			return state;
	}
}
