import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = (props) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <NavLink className="nav-link" to={"/"}>Home</NavLink>
        <NavLink className="nav-link" to={`/aboutus/`}>About Us</NavLink>

        {openModal ?
          <>
            <button className="nav-link" onClick={() => setOpenModal(false)}>Products</button>
            <section>
              <ul className="modal">
                <NavLink to={`/products/${props.category}`} className="modal-link">Ropa hombre</NavLink>
                <NavLink to={`/products/${props.category}`} className="modal-link">Ropa mujer</NavLink>
                <NavLink to={`/products/${props.category}`} className="modal-link">Electrónica</NavLink>
                <NavLink to={`/products/${props.category}`} className="modal-link">Joyas</NavLink>
              </ul>
            </section>
          </>
          :
          <button className="nav-link" onClick={() => setOpenModal(true)}>Products</button>}


        <NavLink className="nav-link" to={`/login/`} >Login</NavLink>
      </ul>

    </nav>
  )
}

export default Navbar
