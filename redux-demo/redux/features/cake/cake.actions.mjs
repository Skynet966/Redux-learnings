import cakeTypes from './cake.types.mjs';
const { ORDERED_CAKE, RESTOCKED_CAKE } = cakeTypes;

// Cake Actions
const orderCake = (cakeOrders = 1) => ({
	type: ORDERED_CAKE,
	payload: cakeOrders,
});
const restockedCake = restockedCakes => ({
	type: RESTOCKED_CAKE,
	payload: restockedCakes,
});

const cakeActions = { orderCake, restockedCake };

export default cakeActions;
