const redux = require('redux');
const createStore = redux.legacy_createStore;

// Cake Types
const MAKE_CAKE = 'MAKE_CAKE';
const SELL_CAKE = 'SELL_CAKE';

// Ice-cream Types
const MAKE_ICE_CREAM = 'MAKE_ICE_CREAM';
const SELL_ICE_CREAM = 'SELL_ICE_CREAM';

// Cake Action
const makeACake = () => ({
	type: MAKE_CAKE
});
const sellACake = () => ({
	type: SELL_CAKE
});

// Ice-cream Action
const makeAIceCream = () => ({
	type: MAKE_ICE_CREAM
});
const sellAIceCream = () => ({
	type: SELL_ICE_CREAM
});

// Initial Cake State
const initialCakeState = {
	noOfCake: 10
};
// Initial Cake State
const initialIceCreamState = {
	noOfIceCream: 10
};

// Cake Reducer
const cakeReducer = (state = initialCakeState, { type, payload }) => {
	switch (type) {
		case MAKE_CAKE:
			return {
				...state,
				noOfCake: state.noOfCake + 1
			};
		case SELL_CAKE:
			return {
				...state,
				noOfCake: state.noOfCake - 1
			};
		default:
			return state;
	}
};

// Ice-cream Reducer
const iceCreamReducer = (state = initialIceCreamState, { type, payload }) => {
	switch (type) {
		case MAKE_ICE_CREAM:
			return {
				...state,
				noOfIceCream: state.noOfIceCream + 1
			};
		case SELL_ICE_CREAM:
			return {
				...state,
				noOfIceCream: state.noOfIceCream - 1
			};
		default:
			return state;
	}
};

// Combine Cake and Ice-cream Reducers
const rootReducer = redux.combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
});

// Create store;
const store = createStore(rootReducer);
console.log('Initial Store', store.getState());

// Subscribe to store
const unSubscribe = store.subscribe(() =>
	console.log('Updated Store', store.getState())
);

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
unSubscribe();
