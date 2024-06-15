import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <ul>
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/favs" >Favs</Link></li>
        <li><button>Change theme</button></li>
      </ul>
    </nav>
  )
}

export default Navbar