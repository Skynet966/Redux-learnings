const store = require('./app/store');
const cakeActions = require('./features/cake/cake.slice').cakeActions;

// log initial state
console.log('Initial state', store.getState());

// subscribe to store
const unsubscribe = store.subscribe(() => {
	console.log('Update state', store.getState());
});

// dispatch stores actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

// unsubscribe to store
unsubscribe();
