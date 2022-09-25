import { fetchUsers } from './user.thunks.mjs';
import userTypes from './user.types.mjs';
const { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED } =
	userTypes;
	
// User Actions
const fetchUsersRequest = () => ({
	type: FETCH_USERS_REQUESTED,
});
const fetchUsersSuccess = users => ({
	type: FETCH_USERS_SUCCEEDED,
	payload: users,
});
const fetchUsersFailure = error => ({
	type: FETCH_USERS_FAILED,
	payload: error,
});

const userActions = {
	fetchUsersRequest,
	fetchUsersSuccess,
	fetchUsersFailure,
	fetchUsers,
};

export default userActions;
