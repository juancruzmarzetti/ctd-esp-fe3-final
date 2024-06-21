import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Home = () => {

  const {state} = useContextGlobal();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(state.data.length > 0){
      setLoading(false);
    }else{
      setLoading(true);
    }
  }, [state.data]);
  
  if (loading) {
    return (
      <div className={`${state.theme} flex flex-col justify-center items-center h-screen`}>
        <div className="spinner" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className={`${state.theme} w-screen pb-10 flex-grow` } >
      <h1 className="font-bold text-xl pt-10 pb-10">Home</h1>
      <div className='card-grid'>
        {state.data.map(dentist => (<Card key={dentist.id} dentist={dentist} theme={state.theme}/>))}
      </div>
    </main>
  )
}

export default Home