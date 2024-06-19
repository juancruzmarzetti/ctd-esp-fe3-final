import React from 'react'

const ButtonAddFav = ({addFav, theme}) => {
  return (
    <button onClick={addFav} className={`favButton mt-5 ${theme === "dark" ? "bg-black" : "bg-gray-200"}`}>Add fav</button>
  )
}

export default ButtonAddFav;