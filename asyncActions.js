const redux = require('redux');
const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;
const { default: produce } = require('immer');
const { bindActionCreators } = require('redux');
const { default: thunk } = require('redux-thunk');
const { default: axios } = require('axios');

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
const fetchTodoSuccess = todos => ({
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
		default:
			return state;
	}
};

// Async function
const fetchTodos = () => {
	return dispatch => {
		dispatch(fetchTodoRequest());
		axios
			.get('https://jsonplaceholder.typicode.com/users/10/todos') // provide wrong url to get error message
			.then(response => {
				// data is the array of todos
				const todos = response.data;
				dispatch(fetchTodoSuccess(todos));
			})
			.catch(error => {
				// error.message is the error message
				dispatch(fetchTodoFailure(error.message));
			});
	};
};

// Create redux store
const store = createStore(reducer, applyMiddleware(thunk));

// Subscribe to store updates
store.subscribe(() => {
	console.log('Updated State:', store.getState());
});

// Bind actions to store dispatch method
const actions = bindActionCreators(
	{ fetchTodoRequest, fetchTodoSuccess, fetchTodoFailure, fetchTodos },
	store.dispatch,
);

// Dispatch the actions
actions.fetchTodos();
