import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = ({}) => {
  const {state} = useContextGlobal();
  const [loading, setLoading] = useState(true);
  
  const [dentist, setDentist] = useState({});

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const dentistId = params.id;
  const url = `https://jsonplaceholder.typicode.com/users/${dentistId}`;

  const getDentist = async () => {
    try{
      let res = await axios(url);
      setDentist(res.data);
      setLoading(false);
    }catch(error){
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    getDentist();
  }, [])

  if(loading){
    return (
      <div className={`${state.theme} flex flex-col justify-center items-center`}>
        <div className="spinner" />
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className={`${state.theme === "dark" && "bg-gray-800"} flex flex-col justify-center items-center`}>
      <h1 className="font-bold text-xl pt-10">Detail Dentist {dentist.id} </h1>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
          <img className="w-full" src="../images/doctor.jpg" alt="Imagen de doctor" />
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Name: {dentist.name}</div>
              <p className="text-gray-700 text-base">Email: {dentist.email}</p>
              <p className="text-gray-700 text-base">Phone: {dentist.phone}</p>
              <p className="text-gray-700 text-base">Web: {dentist.website}</p>
          </div>
        </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail