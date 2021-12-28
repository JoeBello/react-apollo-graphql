import { gql, useQuery } from '@apollo/client'

import './DogPhoto.css'

const GET_DOG_PHOTO = gql`
	query Dog($breed: String!) {
		dog(breed: $breed) {
			id
			displayImage
		}
	}
`

function DogPhoto({ breed }) {
	const { data, error, loading } = useQuery(GET_DOG_PHOTO, {
		variables: { breed }
	})

	if (loading) return 'Loading...'
	if (error) return `Error: ${error}`

	return (
		<div className="dog-photo">
			<img class="dog-photo-img" src={data.dog.displayImage} alt="A dog" />
		</div>
	)
}


export default DogPhoto
