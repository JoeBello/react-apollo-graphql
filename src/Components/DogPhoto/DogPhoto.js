import './DogPhoto.css'
import defaultSrc from './scooby_and_shaggy.jpg'

function DogPhoto({ buttonText, disabled, onButtonClick, src }) {
	return (
		<div className="dog-photo">
			<div>
				<img alt="A dog" className="dog-photo-img" src={src || defaultSrc} />
			</div>
			<div>
				<button disabled={disabled} onClick={onButtonClick}>
					{buttonText}
				</button>
			</div>
		</div>
	)
}


export default DogPhoto
