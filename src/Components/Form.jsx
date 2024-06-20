import React, { useState } from "react";
import { Message } from "./Message";
import FormError from "./FormError";


const Form = ({theme}) => {
  const [user, setUser] = useState({name: "", email: ""});
  const [validation, setValidation] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleName(e){
    setUser({...user, name: e.target.value});    
  }

  function handleEmail(e){
      setUser({...user, email: e.target.value});    
  }

  const validateEmail = (email) => {
    const regex = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])$/;
    return regex.test(email);
  };

  function handleSubmit(e){
    e.preventDefault();
    if(user.name.trim().length > 5 && validateEmail(user.email)){
      console.log( `Nombre completo: ${user.name} // Email: ${user.email}`);
      showError && setShowError(false);
      setValidation(true);
    }else{
      validation && setValidation(false);
      setShowError(true);
    }
  }

  return (
    <div className="w-full max-w-xs h-64">
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={`${theme === "dark" ? "text-white" : "text-gray-500"} block font-bold md:text-right mb-1 md:mb-0 pr-4 `}>
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" onChange={handleName} required/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className={`${theme === "dark" ? "text-white" : "text-gray-500"} block font-bold md:text-right mb-1 md:mb-0 pr-4`}>
            Email
          </label>
        </div>
      <div className="md:w-2/3">
        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="emsail" type="email" onChange={handleEmail} required/>
      </div>
    </div>
    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
      </div>
    </form>
    <div>
    {
        validation && <>
          <Message user={user}/>
        </>
      }{
        showError && <>
          <FormError/>
        </>
      }
    </div>
  </div>
  );
};

export default Form;