import { createSlice } from '@reduxjs/toolkit';

const initState = {
	numOfCakes: 10,
};
const cakeSlice = createSlice({
	name: 'cake',
	initialState: initState,
	reducers: {
		ordered: state => {
			state.numOfCakes--;
		},
		restocked: (state, action) => {
			state.numOfCakes += action.payload;
		},
	},
});

export default cakeSlice;
