import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planetsSlider_container" data-testid="planets">
      <div className="responsive_container">
        <h1 className="planetsSlider_heading">PLANETS</h1>
        <Slider>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
