import './header.css'
import Navbar from '../Navbar/Navbar'
import BurgerButon from '../Buttons/BurgerButon'

const Header = () => {
  return (
    <header className="header">
      <h1>The online store</h1>
      <BurgerButon className="abrir-menu"
        name='Abrir'      
      />      
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


