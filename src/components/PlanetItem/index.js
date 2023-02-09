// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <div className="planetItem_container">
      <img className="planetItem_image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="planetItem_name">{name}</h1>
      <p className="planetItem_description">{description}</p>
    </div>
  )
}

export default PlanetItem
