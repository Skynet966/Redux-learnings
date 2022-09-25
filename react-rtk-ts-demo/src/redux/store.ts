import { configureStore } from '@reduxjs/toolkit';
import cakeSlice from './features/cake/cake.slice.js';
import icecreamSlice from './features/icecream/icecream.slice.js';
import userSlice from './features/user/user.slice.js';

// Destructure
const { cakeReducer, cakeActions } = cakeSlice;
const { icecreamReducer, icecreamActions } = icecreamSlice;
const { userReducer, userActions, fetchUsers } = userSlice;

// configure store
const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		user: userReducer,
	},
});

// Multiple actions binded
export const actions = {
	cakeActions: { ...cakeActions },
	icecreamActions: { ...icecreamActions },
	userActions: { ...userActions, fetchUsers },
};

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
