import { gql, NetworkStatus, useQuery } from '@apollo/client'

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
	const { data, error, loading, networkStatus, refetch } = useQuery(GET_DOG_PHOTO, {
		notifyOnNetworkStatusChange: true,
		variables: { breed }
	})

	if (NetworkStatus[networkStatus] === 'refetch') return 'Refetching...'
	if (loading) return 'Loading...'
	if (error) return `Error: ${error}`

	return (
		<div className="dog-photo">
			{breed &&
				<>
					<div>
						<img className="dog-photo-img" src={data.dog.displayImage} alt="A dog" />
					</div>
					<div>
						<button onClick={() => refetch()}>{`Next ${breed}`}</button>
					</div>
				</>
			}
		</div>
	)
}


export default DogPhoto
