import { useEffect } from 'react';
import userSlice from '../../../redux/features/user/user.slice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import UserCard from './UserCard';

const UserView = () => {
	const user = useAppSelector(state => state.user);
	const { users, loading, error } = user;
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(userSlice.fetchUsers());
	}, []);
	return (
		<div className='flex flex-wrap justify-center content-start gap-10'>
			{loading && <h2>Loading users list...</h2>}
			{!loading && error ? (
				<div className='relative p-8 text-center border border-gray-200 rounded-lg'>
					<h2 className='text-2xl font-medium'>There's nothing here...</h2>

					<p className='mt-4 text-sm text-gray-500'>
						Created posts will appear here, try creating one!
					</p>

					<a
						href=''
						className='inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500'
					>
						Create a post
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='flex-shrink-0 w-4 h-4 ml-3'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M14 5l7 7m0 0l-7 7m7-7H3'
							/>
						</svg>
					</a>
				</div>
			) : (
				users.map(user => (
					<UserCard
						key={user.id}
						name={user.name}
						catchPhrase={user.catchPhrase}
						email={user.email}
						phone={user.phone}
						website={user.website}
					/>
				))
			)}
		</div>
	);
};
export default UserView;
