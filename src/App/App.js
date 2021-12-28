import { useState } from 'react'

import './App.css';
import { ExchangeRates } from '../Components';

function App() {
	const [selectedExchange, setSelectedExchange] = useState(null)

	const eventWrapper = (exchange) => setSelectedExchange(exchange)

	return (
		<div className="App">
			<header className="App-header">
				<h1>React-GraphQL</h1>
				<h2>Selected Exchange: {selectedExchange?.currency || '___'}</h2>
			</header>
			<main>
				<ExchangeRates onSelect={eventWrapper} />
			</main>
		</div>
	);
}

export default App;
