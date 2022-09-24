import {
	applyMiddleware,
	bindActionCreators,
	combineReducers,
	legacy_createStore as createStore,
} from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import cakeActions from './features/cake/cake.actions.mjs';
import cakeReducer from './features/cake/cake.reducer.mjs';
import icecreamActions from './features/icecream/icecream.actions.mjs';
import icecreamReducer from './features/icecream/icecream.reducer.mjs';
import userActions from './features/user/user.actions.mjs';
import userReducer from './features/user/user.reducer.mjs';

// Multiple reducers combined
const rootReducer = combineReducers({
	cake: cakeReducer,
	icecream: icecreamReducer,
	user: userReducer,
});

const logger = reduxLogger.createLogger();
// Store create
const store = createStore(
	rootReducer,
	{},
	applyMiddleware(logger, thunk.default),
);

// Multiple actions binded
export const dispatchActions = bindActionCreators(
	{
		...cakeActions,
		...icecreamActions,
		...userActions,
	},
	store.dispatch,
);

export default store;
