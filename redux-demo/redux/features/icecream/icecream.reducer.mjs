import produce from 'immer';
import icecreamTypes from './icecream.types.mjs';
const { ORDERED_ICECREAM, RESTOCKED_ICECREAM } = icecreamTypes;

// Initial Cake State
const initialIcecreamState = {
	numOfIcecreams: 10,
};

// Cake Reducer
const icecreamReducer = (state = initialIcecreamState, { type, payload }) => {
	switch (type) {
		case ORDERED_ICECREAM:
			return produce(state, draft => {
				draft.numOfIcecreams = state.numOfIcecreams - payload;
			});
		case RESTOCKED_ICECREAM:
			return produce(state, draft => {
				draft.numOfIcecreams = state.numOfIcecreams + payload;
			});
		default:
			return state;
	}
};

export default icecreamReducer;
