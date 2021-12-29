import './DogSelect.css'

function DogSelect({ data, onSelect }) {
	return (
		<div className="dog-select">
			<select name="dog-select-menu" onChange={onSelect}>
				<option key={0} value="default">Select...</option>
				{
					data?.dogs.map(dog => (
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
