import './Cards.css'

const Cards = ({ image, title, description, category, price }) => {
  return (
    <div className="cards">
      <div className="cards-image">
        <img src={image} className="image" alt={title} />
      </div>
      <div className="cards-text-area">
        <h2 className="cards-title">{title}</h2>
        <p className="cards-text-description">{description}</p>
        <p className="cards-text-extra">{category}</p>
        <p className="cards-text-extra">{price}</p>
      </div>
    </div>
  )
}

export default Cards
