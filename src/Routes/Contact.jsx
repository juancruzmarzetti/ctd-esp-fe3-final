import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {state} = useContextGlobal();

  return (
    <div className={` ${state.theme} pb-20` } >
      <div className="w-screen flex flex-col items-center justify-center">
        <h2 className='font-bold text-xl pt-10'>Want to know more?</h2>
        <p className='mb-20'>Send us your questions and we will contact you</p>
        <Form theme={state.theme}/>
      </div>
    </div>
  )
}

export default Contact