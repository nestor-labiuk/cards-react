import './navbar.css'
import BurgerButon from '../Buttons/BurgerButon'

const Navbar = (props) => {

  return (
    <nav  className='nav'>
     
      <div className="nav-button-open">
        <BurgerButon
          name='Open'
        />
      </div>
      <div className="nav-button-close">
        <BurgerButon
          name='Close'
        />
      </div>
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
