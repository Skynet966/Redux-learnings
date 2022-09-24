import produce from 'immer';
import userTypes from './user.types.mjs';
const { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED } =
	userTypes;

// Initial User State
const initialUserState = {
	laoding: false,
	users: [],
	error: '',
};

// Cake Reducer
const userReducer = (state = initialUserState, { type, payload }) => {
	switch (type) {
		case FETCH_USERS_REQUESTED:
			return produce(state, draft => {
				draft.laoding = true;
			});
		case FETCH_USERS_SUCCEEDED:
			return produce(state, draft => {
				draft.laoding = false;
				draft.users = payload;
			});
		case FETCH_USERS_FAILED:
			return produce(state, draft => {
				draft.laoding = false;
				draft.error = payload;
			});
		default:
			return state;
	}
};

export default userReducer;
