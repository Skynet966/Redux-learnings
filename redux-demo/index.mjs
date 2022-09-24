import store, { dispatchActions } from './redux/store.mjs';

// console.log('Initial State', store.getState());

// Subscribe to store
const unSubscribe = store.subscribe(() => {
	// console.log('Updated State', store.getState());
});

// Dispatched actions
dispatchActions.orderCake(5);
dispatchActions.orderIcecream(8);

// Unsubscribe to store
unSubscribe();

// Re-subscribed store to listen async store updates
store.subscribe(() => {
	console.log('Async actions store updates', store.getState());
});

// Dispatched async action
dispatchActions.fetchUsers();
