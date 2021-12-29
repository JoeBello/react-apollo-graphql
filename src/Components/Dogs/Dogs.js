import { useState } from 'react'

import './Dogs.css'

import { DogSelect, DogPhoto } from '../../Components'

function Dogs() {
	const [selected, setSelected] = useState(null)

	return (
		<div className="dogs">
			<DogSelect onSelect={setSelected}/>
			{selected && <DogPhoto breed={selected?.target?.value} />}
		</div>
	)
}

export default Dogs
