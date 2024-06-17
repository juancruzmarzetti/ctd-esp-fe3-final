import React from "react";
import { Link } from "react-router-dom";

const Card = ({ dentist }) => {
  const {name, username, id} = dentist;

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <Link to={`dentist/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
          <h1>{name}</h1>
          <p>Username: {username}</p>
          <p>Id: {id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
