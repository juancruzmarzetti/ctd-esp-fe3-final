import React from 'react'

const ButtonRemoveFav = ({removeFav}) => {
  return (
    <button onClick={removeFav} className="favButton">Remove fav</button>
  )
}

export default ButtonRemoveFav