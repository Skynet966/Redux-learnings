import { createSlice } from '@reduxjs/toolkit';
import cakeSlice from '../cake/cake.slice.js';

// Destructure
const { cakeActions } = cakeSlice;

// Initial Cake State
const initialState = {
	numOfIcecreams: 10,
};

// Cake Reducer
const icecreamSlice = createSlice({
	name: 'icecream',
	initialState,
	reducers: {
		ordered: (state, { payload = 0 }) => {
			if (state.numOfIcecreams > 0)
			{
				state.numOfIcecreams -= payload;
			}
		},
		restocked: (state, { payload = 0 }) => {
			state.numOfIcecreams += payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(cakeActions.ordered, (state, { payload }) => {
			if (state.numOfIcecreams > 0 && payload > 0)
			{
				state.numOfIcecreams--;
			}
		});
	},
});

export default {
	icecreamReducer: icecreamSlice.reducer,
	icecreamActions: icecreamSlice.actions,
};
