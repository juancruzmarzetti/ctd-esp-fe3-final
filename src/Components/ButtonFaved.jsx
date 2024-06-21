import React from 'react'

const ButtonFaved = ({theme}) => {
  return (
    <button className={`favButton mt-5 ${theme === "dark" ? "bg-black" : "bg-gray-100"}`}>✅</button>
  )
}

export default ButtonFaved;