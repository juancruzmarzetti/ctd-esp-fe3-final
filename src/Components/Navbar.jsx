import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {changeTheme, state, setNavState} = useContextGlobal();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== state.navState) {
      navigate(state.navState);
    }
  }, [location.pathname, state.navState, navigate]);

  const getNavLinkClass = (path) => {
    const isActive = state.navState === path;
    const baseClass = 'block py-2 px-3 rounded md:p-0';

    if (state.theme === 'dark') {
      return `${baseClass} ${isActive ? 'text-blue-500' : 'text-white hover:text-blue-500 dark:hover:text-blue-500 dark:hover:bg-gray-700'}`;
    } else {
      return `${baseClass} ${isActive ? 'text-blue-700' : 'text-gray-900 hover:text-blue-700 hover:bg-gray-100'}`;
    }
  };

  return (
    <nav className={`border-gray-200 ${state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} w-screen mr-0 ml-0 pl-0 pr-0`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://digitalhouse.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={`${state.theme === "dark" ? "../images/DHdarkmode.png" : "../images/DH.png"}`} className="h-8" alt="Flowbite Logo" />
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${state.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${state.theme === 'dark' ? 'md:bg-gray-800 dark:border-gray-700' : 'md:bg-white'}`}>
            <li>
              <Link 
                to="/" 
                onClick={() => setNavState('/')}
                className={getNavLinkClass('/')}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setNavState('/contact')}
                className={getNavLinkClass('/contact')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/fav" 
                onClick={() => setNavState('/fav')}
                className={getNavLinkClass('/fav')}
              >
                Favs
              </Link>
            </li>
            <li onClick={changeTheme}>
              <a className="block py-2 px-3 rounded md:p-0">
                <img className='h-6 w-6' src={state.theme === 'dark' ? '../images/sun-emoji-iphone.webp' : '../images/moon-emoji-iphone.png'} alt="Theme Emoji" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar