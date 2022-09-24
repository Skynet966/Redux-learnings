const store = require('./app/store');
const cakeActions = require('./features/cake/cake.slice').cakeActions;
const icecreamActions =
	require('./features/icecream/icecream.slice').icecreamActions;

// log initial state
console.log('Initial state', store.getState());

// subscribe to store
const unsubscribe = store.subscribe(() => {});

// dispatch cake actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

// dispatch icecream actions
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(6));

// unsubscribe to store
unsubscribe();
