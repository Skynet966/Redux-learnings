import axios from 'axios';
import userActions from './user.actions.mjs';

// Async Thunk Function
export const fetchUsers = () => {
	const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
		userActions;

	return dispatch => {
		dispatch(fetchUsersRequest());
		axios
			.get('https://jsonplaceholder.typicode.com/users') // provide wrong url to get error message
			.then(response => {
				// data is the array of todos
				const users = response.data.map(user => ({
					id: user.id,
					name: user.name,
				}));
				dispatch(fetchUsersSuccess(users));
			})
			.catch(error => {
				// error.message is the error message
				dispatch(fetchUsersFailure(error.message));
			});
	};
};
