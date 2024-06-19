import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Home = () => {

  const {state} = useContextGlobal();

  

  return (
    <main className={` ${state.theme} w-screen pb-10` } >
      <h1 className="font-bold text-xl pt-10 pb-10">Home</h1>
      <div className='card-grid'>
        {state.data.map(dentist => (<Card key={dentist.id} dentist={dentist}/>))}
      </div>
    </main>
  )
}

export default Home