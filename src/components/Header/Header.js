import './header.css'
import Navbar from '../Navbar/Navbar'
import BurgerButon from '../Buttons/BurgerButon'

const Header = () => {
  return (
    <header className="header">
      <h1>The online store</h1>

      <div className="header-navbar">
        <div className="nav-button-close">
          <BurgerButon
            name='Close'
          />
        </div>
        <div className="nav-button-open">
          <BurgerButon
            name='Open'
          />
        </div>
        <div className="header-navbar-nav">
          <Navbar
            home='Home'
            aboutUs='About Us'
            products='Products'
            loggins='Loggins'
          />
        </div>
      </div>
    </header>
  )
}

export default Header


