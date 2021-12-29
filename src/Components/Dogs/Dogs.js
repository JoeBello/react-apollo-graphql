import { gql, useLazyQuery, useQuery } from '@apollo/client'
import { useCallback, useEffect, useState } from 'react'

import './Dogs.css'
// import defaultSrc from './scooby_and_shaggy.jpg'
import { DogPhoto, DogSelect } from '../../Components'

const GET_DOGS = gql`
	query GetDogs {
		dogs {
			id
			breed
		}
	}
`

const GET_DOG_PHOTO = gql`
	query Dog($breed: String!) {
		dog(breed: $breed) {
			id
			displayImage
		}
	}
`

function Dogs() {
	const { data, error, loading } = useQuery(GET_DOGS)
	const [getDogPhoto, { data: photoData, error: photoError, loading: photoLoading }] = useLazyQuery(GET_DOG_PHOTO)

	const [selected, setSelected] = useState(null)

	// store default image with Dogs component
	// pass src to child DogPhoto component
	// const [src, setSrc] = useState)(defaultSrc)

	const BUTTON_TEXT = 'Next of breed'

	const nextDogPhoto = useCallback(() => {
		getDogPhoto({ variables: { breed: selected.target.value }})
	}, [getDogPhoto, selected])

	useEffect(() => {
		if (selected) nextDogPhoto()
	}, [nextDogPhoto, selected])

	if (loading) return 'Loading...'
	// photoLoading
	if (error) return `Error: ${error.message || 'there was a problem retrieving dogs'}`
	// photoError

	return (
		<div className="dogs">
			<h2>Selected breed: {selected?.target.value || '___'}</h2>
			<DogSelect data={data} onSelect={setSelected}/>
			<DogPhoto
				buttonText={BUTTON_TEXT}
				disabled={!selected}
				onButtonClick={nextDogPhoto}
				src={photoData?.dog.displayImage}
			/>
		</div>
	)
}

export default Dogs
