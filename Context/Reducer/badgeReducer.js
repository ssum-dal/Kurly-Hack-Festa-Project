const ACTION_REQUEST_BADGE = 'badge/request_badge';

const requestBadge = (num) => ({
	type: ACTION_REQUEST_BADGE,
	num,
});

function RequestBadge(state, action) {
	let newState = { ...state };
	const { num } = action;
	
	newState.badge = num;

	return newState;
}

export const requestAlarm = (num) => async (dispatch, getState) => {
    try {
        dispatch(requestBadge(num));
    } catch (err) {
        console.log(`requestBadge err: ${err}`);
    }
}

const initState = {
	badge: 0
}

export default function badgeReducer(state = initState, action) {
	switch (action.type) {
        case ACTION_REQUEST_BADGE: 	        return RequestBadge(state, action);
		default:					        return state;
	}
}