import './header.css'
import Navbar from '../Navbar/Navbar'
// import BurgerButon from '../Buttons/BurgerButon'
// import {useState} from 'react'

const Header = () => {

  // const [openButton, setopenButton] = useState(false)


  return (
    <header className="header">
      <h1>The online store</h1>
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


