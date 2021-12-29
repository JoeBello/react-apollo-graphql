import { useState } from 'react'

import './App.css';
import { Dogs, DogPhoto } from '../Components';

function App() {
	const [selected, setSelected] = useState(null)

	const onSetSelected = (selected) => setSelected(selected)

	return (
		<div className="App">
			<header className="App-header">
				<h1>React-GraphQL</h1>
				<h2>Selected Dog: {selected?.target?.value || '___'}</h2>
			</header>
			<main>
				<Dogs onSelect={onSetSelected}/>
				{selected && <DogPhoto breed={selected?.target?.value} />}
			</main>
		</div>
	);
}

export default App
