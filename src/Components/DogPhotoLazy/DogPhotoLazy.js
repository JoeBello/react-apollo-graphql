import { gql, useLazyQuery } from '@apollo/client'

import './DogPhotoLazy.css'
import defaultImage from './scooby_and_shaggy.jpg'

const GET_DOG_PHOTO = gql`
	query Dog($breed: String!) {
		dog(breed: $breed) {
			id
			displayImage
		}
	}
`

function DogPhotoLazy({ breed }) {
	const [getDog, { data, error, loading }] = useLazyQuery(GET_DOG_PHOTO)

	if (loading) return 'Loading...'
	if (error) return `Error: ${error}`

	return (
		<div className="dog-photo-lazy">
			<div>
				<img
					alt="A dog"
					className="dog-photo-lazy-img"
					src={!breed || !data || breed === 'default' ? defaultImage : data?.dog.displayImage}
				/>
			</div>
			<div>
				<button
					disabled={!breed || breed === 'default'}
					onClick={
						() => getDog({
							variables: { breed }
						})
					}
				>
					Get Breed
				</button>
			</div>
		</div>
	)
}


export default DogPhotoLazy
