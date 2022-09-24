const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');
import axios from 'axios';

const initialState = {
	laoding: false,
	todos: [],
	error: '',
};

// Generated pending, fulfilled and rejected action types
export const fetchTodos = createAsyncThunk('todo/fetchTodos', () => {
	return axios
		.get('https://jsonplaceholder.typicode.com/users/10/todoss') // provide wrong url to get error message
		.then(response => response.data);
});

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	extraReducers: builder => {
		builder.addCase(fetchTodos.pending, state => {
			state.laoding = true;
		});
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.laoding = false;
			state.todos = action.payload;
			state.error = '';
		});
		builder.addCase(fetchTodos.rejected, (state, action) => {
			state.laoding = false;
			state.todos = [];
			state.error = action.error.message;
		});
	},
});

export default todoSlice;
