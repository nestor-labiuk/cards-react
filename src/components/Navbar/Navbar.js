import './navbar.css'
import BurgerButon from '../Buttons/BurgerButon'
import {useState} from 'react'

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
        <li><a href="/">{props.aboutUs}</a></li>
        <li><a href="/">{props.products}</a></li>
        <li><a href="/">{props.loggins}</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
