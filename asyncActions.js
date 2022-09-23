const redux = require('redux');
const createStore = redux.legacy_createStore;
const { default: produce } = require('immer');
const { bindActionCreators } = require('redux');

// Initial state
const initialState = {
	laoding: false,
	todos: [],
	error: '',
};

// Types
const FETCH_TODOS_REQUESTED = 'FETCH_TODOS_REQUESTED';
const FETCH_TODOS_SUCCEEDED = 'FETCH_TODOS_SUCCEEDED';
const FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED';

// Actions
const fetchTodoRequest = () => ({
	type: FETCH_TODOS_REQUESTED,
});
const fetchTodoSuccess = () => ({
	type: FETCH_TODOS_SUCCEEDED,
	payload: todos,
});
const fetchTodoFailure = error => ({
	type: FETCH_TODOS_FAILED,
	payload: error,
});

// Reducer
const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_TODOS_REQUESTED:
			return produce(state, draft => {
				draft.laoding = true;
			});
		case FETCH_TODOS_SUCCEEDED:
			return produce(state, draft => {
				draft.laoding = false;
				draft.todos = payload;
			});
		case FETCH_TODOS_FAILED:
			return produce(state, draft => {
				draft.laoding = false;
				draft.error = payload;
			});
	}
};

// Create redux store
const store = createStore(reducer);

// Subscribe to store updates
const unSubscribe = store.subscribe(() => {
	console.log('Updated State:', store.getState());
});

// Bind actions to store dispatch method
const actions = bindActionCreators(
	{ fetchTodoRequest, fetchTodoSuccess, fetchTodoFailure },
	store.dispatch,
);

// Unsubscribe to store updates
unSubscribe();
