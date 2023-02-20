import ('./burgerButton.css')

const BurgerButon = (props) => {
  return (
     <button className="burger-button">{props.name}</button> 
  )
}
  
export default BurgerButon
