import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import cakeSlice from '../features/cake/cake.slice';
import icecreamSlice from '../features/icecream/icecream.slice';
import todoSlice, { fetchTodos } from '../features/todo/todo.slice';

const cakeReducer = cakeSlice.reducer;
const icecreamReducer = icecreamSlice.reducer;
const todoReducer = todoSlice.reducer;
// create redux-logger
const logger = createLogger();

// configure store
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		todo: todoReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
