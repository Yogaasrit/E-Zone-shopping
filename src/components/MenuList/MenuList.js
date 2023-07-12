import React from 'react'

const MenuList = () => {
  return (
      <ul className="navbar-nav me-auto mb-2 mb-md-0 container-fluid">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Contact Us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Gift Card</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Shopping</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">Offers</a>
            </li>
            <form classname="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <li className="nav-item">
              <a className="nav-link" href="/">My Cart</a>
            </li>
            <span >
              <li className="nav-item">
                <a className="nav-link" href="/">Login</a>
              </li>
            </span>
          </ul>
      

  )
}

export default MenuList