import { gql, useQuery } from '@apollo/client'

import './DogSelect.css'

const GET_DOGS = gql`
	query GetDogs {
		dogs {
			id
			breed
		}
	}
`

function DogSelect({ onSelect }) {
	const { data, error, loading } = useQuery(GET_DOGS)

	if (loading) return 'Loading...'
	if (error) return `Error: ${error.message || 'there was a problem retrieving dogs'}`

	return (
		<div className="dog-select">
			<select name="dog-select-menu" onChange={onSelect}>
				<option key={0} value="default">Select...</option>
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

export default DogSelect
