import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial User State type
type User = {
	id: number;
	name: string;
	email: string;
	phone: string;
	website: string;
	catchPhrase: string;
};
type InitialState = {
	loading: boolean;
	users: User[];
	error: string;
};
// Initial User State
const initialState: InitialState = {
	loading: false,
	users: [],
	error: '',
};

// Generated pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users',
	); // provide wrong url to get error message
	return response.data.map(
		(user: {
			id: number;
			name: string;
			email: string;
			phone: string;
			website: string;
			company: { catchPhrase: string };
		}) => ({
			id: user.id,
			name: user.name,
			email: user.email,
			phone: user.phone,
			website: user.website,
			catchPhrase: user.company.catchPhrase,
		}),
	);
});

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchUsers.pending, state => {
			state.loading = true;
		});
		builder.addCase(
			fetchUsers.fulfilled,
			(state, action: PayloadAction<User[]>) => {
				state.loading = false;
				state.users = action.payload;
				state.error = '';
			},
		);
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.users = [];
			state.error = action.error.message || 'Something went wrong';
		});
	},
});

export default {
	userReducer: userSlice.reducer,
	userActions: userSlice.actions,
	fetchUsers,
};
