import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {changeTheme, state} = useContextGlobal();

  return (
    <nav className={state.theme}>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
        <li><Link to="/fav" >Favs</Link></li>
        <li><button onClick={changeTheme}>Change theme</button></li>
      </ul>
    </nav>
  )
}

export default Navbar