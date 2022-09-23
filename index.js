const redux = require('redux');
const createStore = redux.legacy_createStore;

// Types
const MAKE_CAKE = 'MAKE_CAKE';

// Action
const makeACake = () => ({
	type: MAKE_CAKE
});

// Initial State
const initialState = {
	cake: 10
};

// Reducer
const cakeShopeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case MAKE_CAKE:
			return {
				cake: state.cake + 1
			};
		default:
			return state;
	}
};

// Create store;
const store = createStore(cakeShopeReducer);
console.log('Initial Store', store.getState());
