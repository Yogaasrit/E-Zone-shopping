
import React from 'react'
import MenuList from '../MenuList/MenuList'

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top" style={{backgroundColor: "#F07A91",color:"#e3f2fd"}}>
          <div className="container-fluid">
            <a className="navbar-brand" 
               href="/">E-Zone-Shopping-Mart 
           </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <MenuList />
            <div className="collapse navbar-collapse" id="navbarCollapse"></div>
          </div>
      </nav>
      </header>
  )
}

export default Header