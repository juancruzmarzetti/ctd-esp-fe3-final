import React from 'react'
import { useContextGlobal } from './utils/global.context';

const Footer = () => {
  const {state} = useContextGlobal();

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className='flex justify-center items-center'>
            <a href="https://digitalhouse.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                Powered by <img src="../images/DH.png" className="h-10" alt="DigitalHouse Logo" />
            </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.linkedin.com/in/juan-cruz-marzetti-6332892a4/" className="hover:underline">Juan Cruz Marzetti Falcone</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
