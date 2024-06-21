import React from 'react'
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const {state} = useContextGlobal();

  return (
    <footer className={`${state.theme === "dark" ? "bg-gray-800" : ""} w-full pb-4`}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-center items-center">
          <a href="https://digitalhouse.com/" className={`${state.theme === "dark" ? "text-white" : ""} flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse`}>
            Powered by <img src={`${state.theme === "dark" ? "../images/DHdarkmode.png" : "../images/DH.png"}`} className="h-10" alt="DigitalHouse Logo" />
          </a>
        </div>
        <span className={`${state.theme === "dark" ? "text-white" : "text-gray-500"} block text-sm text-center`}>
          © 2024 <a href="https://www.linkedin.com/in/juan-cruz-marzetti-6332892a4/" className={`${state.theme === "dark" ? "text-white" : ""} hover:underline`}>Juan Cruz Marzetti Falcone</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
