import { gql, useQuery } from '@apollo/client'

import './Dogs.css'

const GET_DOGS = gql`
	query GetDogs {
		dogs {
			id
			breed
		}
	}
`

function Dogs({ onSelect }) {
	const { data, error, loading } = useQuery(GET_DOGS)

	if (loading) return 'Loading...'
	if (error) return `Error: ${error.message || 'there was a problem retrieving dogs'}`

	return (
		<div className="dogs">
			<select name="dog" onChange={onSelect}>
				<option key={0} value={null}>Select...</option>
				{
					data.dogs.map(dog => (
						<option key={dog.id} value={dog.breed}>
							{dog.breed}
						</option>
					))
				}
			</select>
		</div>
	)
}

export default Dogs
