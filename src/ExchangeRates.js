import { useQuery, gql } from '@apollo/client'

const EXCHANGE_RATES = gql`
	query GetExchangeRates {
		rates(currency: "USD") {
			currency
			rate
		}
	}
`

// formik and yum
// graphql
// nx
function ExchangeRates({ onSelect }) {
	const { data, error, loading } = useQuery(EXCHANGE_RATES)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error: {error}</p>

	return data.rates.map((exchange) => {
		const { currency, rate } = exchange

		return (
			<div key={currency}>
				<button onClick={(_) => onSelect({ currency, rate }) }>
					{currency}: {rate}
				</button>
			</div>
		)
	})
}

export default ExchangeRates
