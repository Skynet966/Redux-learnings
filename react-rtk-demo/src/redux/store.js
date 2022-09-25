import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import cakeSlice from './features/cake/cake.slice.js';
import icecreamSlice from './features/icecream/icecream.slice.js';
import userSlice from './features/user/user.slice.js';

// Destructure
const { cakeReducer, cakeActions } = cakeSlice;
const { icecreamReducer, icecreamActions } = icecreamSlice;
const { userReducer, userActions, fetchUsers } = userSlice;
// create redux-logger
const logger = createLogger();

// configure store
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		user: userReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(logger).concat(thunk),
});

// Multiple actions binded
export const actions = {
	cakeActions: { ...cakeActions },
	icecreamActions: { ...icecreamActions },
	userActions: { ...userActions, fetchUsers },
};

export default store;
