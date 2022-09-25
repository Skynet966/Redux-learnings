import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import icecreamSlice from '../../../redux/features/icecream/icecream.slice';

const IcecreamView = () => {
	const {
		icecreamActions: { ordered, restocked },
	} = icecreamSlice;
	const [values, setValues] = useState({ order: 1, restocked: 1 });
	const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
	const dispatch = useDispatch();
	const handleChangeOrderValue = e => {
		setValues({ ...values, order: parseInt(e.target.value) });
	};
	const handleOrderDispatch = () => {
		const noics = parseInt(numOfIcecreams);
		if (noics > 0 && values.order <= noics) {
			dispatch(ordered(values.order));
		}
	};
	useEffect(() => {
		const noics = parseInt(numOfIcecreams);
		if (noics < values.order) {
			setValues({ ...values, order: noics });
		}else if (values.order === 0 && noics > 0) {
			setValues({ ...values, order: 1 });
		}
	}, [numOfIcecreams]);
	return (
		<div>
			<div className='relative block p-8 pb-10 border-t-4 border-pink-600 rounded-sm shadow-xl'>
				<h5 className='text-4xl font-bold'>{numOfIcecreams}</h5>
				<p className='mt-4 mb-9 text-lg font-medium text-gray-500'>
					Totoal number of Icecreams currently available in the store.
				</p>
				<div className='flex gap-4 justify-end content-start flex-wrap'>
					<input
						type='number'
						min='0'
						max={numOfIcecreams}
						value={values.order}
						onChange={handleChangeOrderValue}
						className='bock border text-pink-600 border-pink-600 shadow-sm px-3 py-2 focus:border-pink-500 focus:ring-pink-500 sm:text-sm rounded-sm w-20'
					/>
					<button onClick={handleOrderDispatch}>
						<span className='relative inline-block text-sm font-medium text-pink-600 group active:text-pink-500 focus:outline-none focus:ring'>
							<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-pink-600 group-hover:translate-y-0 group-hover:translate-x-0'></span>
							<span className='relative block px-8 py-3 bg-white border border-current'>
								Order Icecreams
							</span>
						</span>
					</button>
					<input
						type='number'
						min='1'
						value={values.restocked}
						onChange={e =>
							setValues({ ...values, restocked: parseInt(e.target.value) })
						}
						className='bock border text-pink-600 border-pink-600 shadow-sm px-3 py-2 focus:border-pink-500 focus:ring-pink-500 sm:text-sm rounded-sm w-20'
					/>
					<button onClick={() => dispatch(restocked(values.restocked))}>
						<span className='relative inline-block text-sm font-medium text-pink-600 group active:text-pink-500 focus:outline-none focus:ring'>
							<span className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-pink-600 group-hover:translate-y-0 group-hover:translate-x-0'></span>
							<span className='relative block px-8 py-3 bg-white border border-current'>
								Restock Icecreams
							</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};
export default IcecreamView;
