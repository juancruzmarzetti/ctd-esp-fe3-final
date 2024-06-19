import React from 'react'

const FormError = () => {
  return (
    <>
        <div class="mt-36 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Información erronea! </strong>
            <span class="block sm:inline">Por favor verifique su información nuevamente.</span>
        </div>
    </>
  )
}

export default FormError