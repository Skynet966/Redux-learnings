import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icecreamSlice from './icecreamSlice';
export const IcecreamView = () => {
	const [value, setValue] = useState(1);
	const {
		actions: { ordered, restocked },
	} = icecreamSlice;
	const numOfIcecream = useSelector(state => state.icecream.noOfIcecreams);
	const dispatch = useDispatch();
	return (
		<div>
			<h2>Number of icecream - {numOfIcecream}</h2>
			<button onClick={() => dispatch(ordered())}>Order icecream</button>
			<input
				type='number'
				placeholder='How many Icecreams restocked?'
				value={value}
				onChange={e => {
					setValue(parseInt(e.target.value));
				}}
			/>
			<button onClick={() => dispatch(restocked(value))}>Restock icecream</button>
		</div>
	);
};
