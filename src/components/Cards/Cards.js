import Button from '../Buttons/Button'
import './cards.css'
import React, {useState} from 'react'



const Cards = ({ image, title, description, category, price }) => {
  const [count, setCount] = useState(0)


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
          <Button 
            name='Buy'
            onClick={() => setCount(count + 1)}
          />
        </div>
      </div>
    </div>
  )
}

export default Cards
