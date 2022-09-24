import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { CakeView } from './features/cake/CakeView';
import { IcecreamView } from './features/icecream/IcecreamView';
import { TodoView } from './features/todo/todoView';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='App'>
				<CakeView />
			</div>
			<div className='App'>
				<IcecreamView />
			</div>
			<div className='App'>
				<TodoView />
			</div>
		</>
	);
}

export default App;
