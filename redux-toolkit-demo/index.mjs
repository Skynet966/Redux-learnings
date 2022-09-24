import store, { actions } from './redux/store.mjs';
const { cakeActions, icecreamActions, userActions } = actions;

// Print initial state
console.log('Initial State', store.getState());

// Subscribe to store
const unSubscribe = store.subscribe(() => {});

// Dispatched actions
store.dispatch(cakeActions.ordered(5));
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(6));
store.dispatch(icecreamActions.ordered(5));
store.dispatch(icecreamActions.ordered(2));
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(8));

// Unsubscribe to store
unSubscribe();

// Re-subscribed store to listen async store updates
store.subscribe(() => {});

// Dispatched async action
store.dispatch(userActions.fetchUsers());
