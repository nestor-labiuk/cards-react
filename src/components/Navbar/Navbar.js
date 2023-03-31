import './navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
// import Products from '../../pages/Products/Products'

const Navbar = (props) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <nav className='nav'>
      <ul className='nav-list'>

        {openModal
          ? <>
            <NavLink
              className='modal-link'
            >Products
            </NavLink>
            <section>
              {/* {console.log(Products)} */}
              <ul
                className='modal'
                onClick={() => setOpenModal(false)}
              >
                <NavLink
                  to={`/products/${props.category}`}
                  className='modal-link'
                >Ropa hombre
                </NavLink>
                <NavLink
                  to={`/products/${props.category}`}
                  className='modal-link'
                >Ropa mujer
                </NavLink>
                <NavLink
                  to={`/products/${props.category}`}
                  className='modal-link'
                >Electrónica
                </NavLink>
                <NavLink
                  to={`/products/${props.category}`}
                  className='modal-link'
                >Joyas
                </NavLink>
              </ul>
            </section>
          </>
          : 
          <NavLink
              className='modal-link'
              onClick={() => setOpenModal(true)}
            >Products
          </NavLink>}
        <NavLink
          className={({ isActive }) => isActive ? 'modal-link modal-link-active' : 'modal-link'}
          to='/'
          onClick={() => setOpenModal(false)}
        >Home
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'modal-link modal-link-active' : 'modal-link'}
          to='/about-us/'
          onClick={() => setOpenModal(false)}
        >About Us
        </NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'modal-link modal-link-active' : 'modal-link'}
          to='/login/'
          onClick={() => setOpenModal(false)}
        >Login
        </NavLink>
        {/* <NavLink
          className={({ isActive }) => isActive ? "modal-link modal-link-active" : "modal-link"}
          to={`/register/`}
          onClick={() => setOpenModal(false)}
        >Register</NavLink> */}
      </ul>

    </nav>
  )
}

export default Navbar
