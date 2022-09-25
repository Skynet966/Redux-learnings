import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial User State
const initialState = {
	laoding: false,
	users: [],
	error: '',
};

// Generated pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
	return axios
		.get('https://jsonplaceholder.typicode.com/users') // provide wrong url to get error message
		.then(response =>
			response.data.map(user => ({
				id: user.id,
				name: user.name,
				catchPhrase: user.company.catchPhrase,
				phone: user.phone,
				email: user.email,
				website: user.website
			})),
		);
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	extraReducers: builder => {
		builder.addCase(fetchUsers.pending, state => {
			state.laoding = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.laoding = false;
			state.users = action.payload;
			state.error = '';
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.laoding = false;
			state.users = [];
			state.error = action.error.message;
		});
	},
});

export default {
	userReducer: userSlice.reducer,
	userActions: userSlice.actions,
	fetchUsers,
};
