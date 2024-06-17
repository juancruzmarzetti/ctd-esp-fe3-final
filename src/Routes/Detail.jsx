import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = ({}) => {
  const {state} = useContextGlobal();

  
  const [dentist, setDentist] = useState({});

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const dentistId = params.id;
  const url = `https://jsonplaceholder.typicode.com/users/${dentistId}`;

  const getDentist = async () => {
    try{
      let res = await axios(url);
      setDentist(res.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getDentist();
  }, [])

  return (
    <div className={state.theme}>
      <h1>Detail Dentist id </h1>
      <div>
        <h2>Name: {dentist.name}</h2>
        <p>Email: {dentist.email}</p>
        <p>Phone: {dentist.phone}</p>
        <p>Web: {dentist.website}</p>
      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail