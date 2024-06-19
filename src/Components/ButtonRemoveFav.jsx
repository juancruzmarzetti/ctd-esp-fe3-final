import React from 'react'

const ButtonRemoveFav = ({removeFav, theme}) => {
  return (
    <button onClick={removeFav} className={`favButton mt-5 ${theme === "dark" ? "bg-black" : "bg-gray-200"}`}>Remove fav</button>
  )
}

export default ButtonRemoveFav