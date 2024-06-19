import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContextGlobal();

  return (
    <div className={state.theme}>
    <div className="w-screen flex flex-col items-center justify-center">
      <h2>Want to know more?</h2>
      <p className='mb-10'>Send us your questions and we will contact you</p>
      <Form/>
    </div>
    </div>
  )
}

export default Contact