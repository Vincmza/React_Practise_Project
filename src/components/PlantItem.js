import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ id, cover, name, water, light, offer, price }) {

	return (
		<li key={id} className='lmj-plant-item'>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
            {offer}
			{price}
			<div>
				<CareScale careType='light' scaleValue={light} />
				<CareScale careType='water' scaleValue={water} />
			</div>
		</li>
	)
}

export default PlantItem