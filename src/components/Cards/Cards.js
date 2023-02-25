import './cards.css'
import { Link } from 'react-router-dom'



const Cards = ({ image, title, description, category, price,id }) => {


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
          <Link to={`/product/${id}`} className='cards-button'>Show more</Link>
        </div>
      </div>
    </div>
  )
}

export default Cards
