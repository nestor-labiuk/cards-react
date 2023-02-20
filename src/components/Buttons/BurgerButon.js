import ('./burgerButton.css')

const BurgerButon = (props) => {
  return (
     <button className={`burger-button ${(props.className || '')}`}>{props.name}</button> 
  )
}
  
export default BurgerButon
