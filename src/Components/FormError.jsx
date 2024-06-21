import React from 'react'

const FormError = () => {
  return (
    <>
        <div className="mt-36 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Información erronea! </strong>
            <span className="block sm:inline">Por favor verifique su información nuevamente.</span>
        </div>
    </>
  )
}

export default FormError