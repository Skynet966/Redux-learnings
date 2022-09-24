const { createSlice } = require("@reduxjs/toolkit");

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
	extraReducers: builder => {
		builder.addCase(cakeActions.ordered, state => {
			state.noOfIcecreams--;
		});
	},
});

export default icecreamSlice;
