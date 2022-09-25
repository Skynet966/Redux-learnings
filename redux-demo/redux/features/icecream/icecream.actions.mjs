import icecreamTypes from './icecream.types.mjs';
const { ORDERED_ICECREAM, RESTOCKED_ICECREAM } = icecreamTypes;
// Icecream Actions
const orderIcecream = (icecreamOrders = 1) => ({
	type: ORDERED_ICECREAM,
	payload: icecreamOrders,
});
const restockedIcecream = restockedIcecreams => ({
	type: RESTOCKED_ICECREAM,
	payload: restockedIcecreams,
});

const icecreamActions = { orderIcecream, restockedIcecream };

export default icecreamActions;
