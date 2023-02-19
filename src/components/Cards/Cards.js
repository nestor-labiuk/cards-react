import Button from '../Buttons/Button'
import './cards.css'

const Cards = ({ image, title, description, category, price }) => {
  return (
    <div className="cards">
      <div className="cards-image">
        <img src={image} alt={title} />
      </div>
      <div className="cards-text-area">
        <h2 >{title}</h2>
        <p>{description}... <span>(Full description)</span></p>
        <p>Categiry: {category}</p>
        <div className="cards-buy">
          <p>Price: ${price}</p>
          <Button name='Buy'/>
        </div>
      </div>
    </div>
  )
}

export default Cards
