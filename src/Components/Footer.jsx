import React from 'react'
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const {state} = useContextGlobal();

  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src="../images/DH.png" alt='DH-logo' className="h-10"/>
    </footer>
  )
}

export default Footer
