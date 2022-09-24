import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './todoSlice';
export const TodoView = () => {
	const todo = useSelector(state => state.todo);
	const dispatch = useDispatch();

	useEffect(() => {
    console.log('dispatched called 2 times')
		dispatch(fetchTodos());
	}, []);

	return (
		<div>
			<div>List of Todos!!</div>
			{todo.loading && <div>Loading todos...</div>}
			{!todo.loading && todo.error ? (
				<div>{todo.error}</div>
			) : (
				<ul>
					{todo.todos.map((todo, index) => (
						<li key={index}>
							<div>{todo.id}</div>
							<div>{todo.title}</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
