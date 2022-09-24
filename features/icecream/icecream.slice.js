const createSlice = require('@reduxjs/toolkit').createSlice;
const cakeActions = require('../cake/cake.slice').cakeActions;

const initState = {
	noOfIcecreams: 10,
};

const icecreamSlice = createSlice({
	name: 'icecream',
	initialState: initState,
	reducers: {
		ordered: state => {
			state.noOfIcecreams--;
		},
		restocked: (state, action) => {
			state.noOfIcecreams += action.payload;
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
			state.noOfIcecreams--;
		});
	},
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
