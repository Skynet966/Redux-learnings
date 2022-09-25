import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Initial state type
type InitialState = {
	numOfCakes: number;
};

// Initial Cake State
const initialState: InitialState = {
	numOfCakes: 10,
};

// Cake Reducer
const cakeSlice = createSlice({
	name: 'cake',
	initialState,
	reducers: {
		ordered: (state, { payload = 0 }: PayloadAction<number>) => {
			if (state.numOfCakes > 0) {
				state.numOfCakes -= payload;
			}
		},
		restocked: (state, { payload = 0 }: PayloadAction<number>) => {
			state.numOfCakes += payload;
		},
	},
});

export default {
	cakeReducer: cakeSlice.reducer,
	cakeActions: cakeSlice.actions,
};
