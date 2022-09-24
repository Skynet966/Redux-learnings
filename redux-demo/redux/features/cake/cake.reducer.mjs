import produce from 'immer';
import cakeTypes from './cake.types.mjs';
const { ORDERED_CAKE, RESTOCKED_CAKE } = cakeTypes;

// Initial Cake State
const initialCakeState = {
	numOfCakes: 10,
};

// Cake Reducer
const cakeReducer = (state = initialCakeState, { type, payload }) => {
	switch (type) {
		case ORDERED_CAKE:
			return produce(state, draft => {
				draft.numOfCakes = state.numOfCakes - payload;
			});
		case RESTOCKED_CAKE:
			return produce(state, draft => {
				draft.numOfCakes = state.numOfCakes + payload;
			});
		default:
			return state;
	}
};

export default cakeReducer;
