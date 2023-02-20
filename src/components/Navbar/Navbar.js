import './navbar.css'
import BurgerButon from '../Buttons/BurgerButon'


const Navbar = (props) => {
  return (
    <nav  className='nav'>
      <BurgerButon className="abrir-menu"
        name='Cerrar'      
      />
      <ul className='nav-list'>
        <li><a href="/">{props.home}</a></li>
        <li><a href="/">{props.aboutUs}</a></li>
        <li><a href="/">{props.products}</a></li>
        <li><a href="/">{props.loggins}</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
