import { useState } from 'react'

import './App.css';
import { Dogs } from '../Components'

function App() {
	const [selected, setSelected] = useState(null)

	return (
		<div className="App">
			<header className="App-header">
				<h1>React-GraphQL</h1>
			</header>
			<main>
				<Dogs />
			</main>
		</div>
	);
}

export default App
