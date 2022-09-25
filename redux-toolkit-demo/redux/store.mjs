import rtk from '@reduxjs/toolkit';
const { configureStore, bindActionCreators } = rtk;

import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import cakeSlice from './features/cake/cake.slice.mjs';
import icecreamSlice from './features/icecream/icecream.slice.mjs';
import userSlice from './features/user/user.slice.mjs';

// Destructure
const { cakeReducer, cakeActions } = cakeSlice;
const { icecreamReducer, icecreamActions } = icecreamSlice;
const { userReducer, userActions, fetchUsers } = userSlice;
// create redux-logger
const logger = reduxLogger.createLogger();

// configure store
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		user: userReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(logger).concat(thunk.default),
});

// Multiple actions binded
export const actions = {
	cakeActions: { ...cakeActions },
	icecreamActions: { ...icecreamActions },
	userActions: { ...userActions, fetchUsers },
};

export default store;
