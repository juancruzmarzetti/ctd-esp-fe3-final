import React, { useState } from "react";


const Form = () => {
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
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  function handleSubmit(e){
    e.preventDefault();
    if(user.name.length > 5 && validateEmail(user.email)){
      console.log( `Nombre completo: ${user.name} // Email: ${user.email}`);
      showError && setShowError(false);
      setValidation(true);
    }else{
      validation && setValidation(false);
      setShowError(true);
    }
  }

  return (
  <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre completo</label>
          <input type="text" name="text" placeholder="Nombre completo" onChange={handleName} required/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" onChange={handleEmail} required/>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {
        validation && <>
          <p>Gracias {user.name}, te contactaremos cuando antes vía mail</p>  
        </>
      }{
        showError && <>
          <p>Por favor verifique su información nuevamente</p>
        </>
      }
    </div>
  );
};

export default Form;
