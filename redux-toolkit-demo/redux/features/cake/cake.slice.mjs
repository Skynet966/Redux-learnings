import rtk from '@reduxjs/toolkit';
const { createSlice } = rtk;

// Initial Cake State
const initialState = {
	numOfCakes: 10,
};

// Cake Reducer
const cakeSlice = createSlice({
	name: 'cake',
	initialState,
	reducers: {
		ordered: (state, action) => {
			state.numOfCakes -= action.payload;
		},
		restocked: (state, action) => {
			state.numOfCakes += action.payload;
		},
	},
});

export default {
	cakeReducer: cakeSlice.reducer,
	cakeActions: cakeSlice.actions,
};
