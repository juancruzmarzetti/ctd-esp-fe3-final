import React from 'react'

const ButtonAddFav = ({addFav}) => {
  return (
    <button onClick={addFav} className="favButton">Add fav</button>
  )
}

export default ButtonAddFav;