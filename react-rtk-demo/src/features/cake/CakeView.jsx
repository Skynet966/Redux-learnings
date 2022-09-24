import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cakeSlice from './cakeSlice';
export const CakeView = () => {
	const {
		actions: { ordered, restocked },
	} = cakeSlice;
	const numOfCakes = useSelector(state => state.cake.numOfCakes);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of cakes - {numOfCakes}</h2>
			<button onClick={()=>dispatch(ordered())}>Order cake</button>
			<button onClick={()=>dispatch(restocked(3))}>Restock cake</button>
		</div>
	);
};
