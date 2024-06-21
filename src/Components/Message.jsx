import React from 'react'

export const Message = ({user}) => {
    const {name} = user;
  return (
    <>
        <div className="mt-36 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
            <p className="font-bold">Gracias {name}</p>
            <p className="text-sm">Te contactaremos cuando antes vía mail</p>
        </div> 
    </>
  )
}
