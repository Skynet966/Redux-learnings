const redux = require('redux');
const createStore = redux.legacy_createStore;
const middleware = redux.applyMiddleware;
const { createLogger } = require('redux-logger');
const produce = require('immer').produce;

// Cake Types
const MAKE_CAKE = 'MAKE_CAKE';
const SELL_CAKE = 'SELL_CAKE';

// Ice-cream Types
const MAKE_ICE_CREAM = 'MAKE_ICE_CREAM';
const SELL_ICE_CREAM = 'SELL_ICE_CREAM';

// Cake Action
const makeACake = () => ({
	type: MAKE_CAKE,
});
const sellACake = () => ({
	type: SELL_CAKE,
});

// Ice-cream Action
const makeAIceCream = () => ({
	type: MAKE_ICE_CREAM,
});
const sellAIceCream = () => ({
	type: SELL_ICE_CREAM,
});

// Initial Cake State
const initialCakeState = {
	noOfCake: 10,
};
// Initial Cake State
const initialIceCreamState = {
	noOfIceCream: 10,
};

// Cake Reducer
const cakeReducer = (state = initialCakeState, { type, payload }) => {
	switch (type) {
		case MAKE_CAKE:
			return produce(state, draft => {
				draft.noOfCake = state.noOfCake + 1;
			});
		case SELL_CAKE:
			return produce(state, draft => {
				draft.noOfCake = state.noOfCake - 1;
			});
		default:
			return state;
	}
};

// Ice-cream Reducer
const iceCreamReducer = (state = initialIceCreamState, { type, payload }) => {
	switch (type) {
		case MAKE_ICE_CREAM:
			return produce(state, draft => {
				draft.noOfIceCream = state.noOfIceCream + 1;
			});
		case SELL_ICE_CREAM:
			return produce(state, draft => {
				draft.noOfIceCream = state.noOfIceCream - 1;
			});
		default:
			return state;
	}
};

// Combine Cake and Ice-cream Reducers
const rootReducer = redux.combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

// create logger
const logger = createLogger();

// Create store;
const store = createStore(rootReducer, middleware(logger));
// console.log('Initial Store', store.getState());

// Subscribe to store
// const unSubscribe = store.subscribe(() =>
// 	console.log('Updated Store', store.getState()),
// );

// Perform Updates in Cake
store.dispatch(makeACake());
store.dispatch(makeACake());
store.dispatch(makeACake());
store.dispatch(sellACake());
store.dispatch(sellACake());
store.dispatch(sellACake());

// Perform Updates in Ice-Cream
store.dispatch(makeAIceCream());
store.dispatch(makeAIceCream());
store.dispatch(makeAIceCream());
store.dispatch(sellAIceCream());
store.dispatch(sellAIceCream());
store.dispatch(sellAIceCream());

// Unsubscribe Store
// unSubscribe();
