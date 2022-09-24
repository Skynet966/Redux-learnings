const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cake.slice');
const icecreamReducer = require('../features/icecream/icecream.slice');

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
	},
});

module.exports = store;
