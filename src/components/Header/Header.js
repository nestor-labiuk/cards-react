import './header.css'
import Navbar from '../Navbar/Navbar'
import BurgerButon from '../Buttons/BurgerButon'
import { useState } from 'react'

const Header = () => {

  // const [openButton, setopenButton] = useState(false)
  const [openButton, setopenButton] = useState(false)


  return (
    <header className="header">
      <h1>The online store</h1>

      {openButton ?
        <div className="nav-button-close" onClick={() => setopenButton(false)}>
          <BurgerButon name='Close' /></div> :
        <div className="nav-button-open" onClick={() => setopenButton(true)}>
          <BurgerButon name='Open' /></div>
      }

      <Navbar
        home='Home'
        aboutUs='About Us'
        products='Products'
        loggins='Loggins'
      />
    </header>
  )
}

export default Header


