import './navbar.css'
import BurgerButon from '../Buttons/BurgerButon'
import {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {

  const [openButton, setopenButton] = useState(false)

  return (
    <nav className='nav'>
     
      {openButton ?
        <div className="nav-button-close" onClick={() => setopenButton(false)}>
          <BurgerButon name='Close' /></div> :
        <div className="nav-button-open" onClick={() => setopenButton(true)}>
          <BurgerButon name='Open' /></div>
      }

      <ul className='nav-list'>
        <li><a href="/">{props.home}</a></li>
        <NavLink to={`/aboutus/`}>About Us</NavLink>
        <NavLink to={`/Products-detail/`}>Products</NavLink>
        <NavLink to={`/login/`} >Login</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar
