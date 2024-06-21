import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {changeTheme, state, setNavState} = useContextGlobal();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`border-gray-200 ${state.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} w-screen`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://digitalhouse.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={`${state.theme === "dark" ? "../images/DHdarkmode.png" : "../images/DH.png"}`} className="h-8" alt="Flowbite Logo" />
        </a>
        <button 
          onClick={toggleMenu} 
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM4 15a1 1 0 000 2h12a1 1 0 000-2H4z" clipRule="evenodd"></path>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg ${state.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${state.theme === 'dark' ? 'md:bg-gray-800 dark:border-gray-700' : 'md:bg-white'}`}>
            <li>
              <Link 
                to="/" 
                onClick={() => { setNavState('/'); setIsMenuOpen(false); }}
                className={getNavLinkClass('/')}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => { setNavState('/contact'); setIsMenuOpen(false); }}
                className={getNavLinkClass('/contact')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/fav" 
                onClick={() => { setNavState('/fav'); setIsMenuOpen(false); }}
                className={getNavLinkClass('/fav')}
              >
                Favs
              </Link>
            </li>
            <li>
              <div className="inline-flex items-center">
                <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                  <input id="auto-update" type="checkbox" onClick={changeTheme}
                  className={`absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer ${state.theme === 'dark' ? 'bg-white/30' : 'bg-black/30'} checked:bg-gray-900 peer-checked:before:bg-gray-900`}
                  defaultChecked={state.theme === 'dark'} />
                  <label htmlFor="auto-update"
                  className={`before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-transparent ${state.theme === 'dark' ? 'bg-white' : 'bg-black'} shadow-md transition-all duration-300 peer-checked:translate-x-full peer-checked:${state.theme === 'dark' ? 'bg-white' : 'bg-black'}`}>
                    <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                    data-ripple-dark="true"></div>
                  </label>
                </div>
                <label htmlFor="auto-update" className={`mt-px mb-0 ml-3 ${state.theme === "dark" ? "text-white" : "text-gray-700"} font-light cursor-pointer select-none`}>
                  Dark mode
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar