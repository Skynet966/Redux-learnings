const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cake.slice');

const store = configureStore({
	reducer: {
		cake: cakeReducer,
	},
});

module.exports = store;
