import rtk from '@reduxjs/toolkit';
import cakeSlice from '../cake/cake.slice.mjs';

// Destructure
const { createSlice } = rtk;
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
		ordered: (state, action) => {
			state.numOfIcecreams -= action.payload;
		},
		restocked: (state, action) => {
			state.numOfIcecreams += action.payload;
		},
	},
	// unstandardized approach
	// extraReducers: {
	// 	['cake/ordered']: state => {
	// 		state.noOfIcecreams--;
	// 	},
	// },

	// better approach (standardised approach)
	extraReducers: builder => {
		builder.addCase(cakeActions.ordered, state => {
			state.numOfIcecreams--;
		});
	},
});

export default {
	icecreamReducer: icecreamSlice.reducer,
	icecreamActions: icecreamSlice.actions,
};
