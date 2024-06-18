import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import ButtonAddFav from "./ButtonAddFav";
import ButtonRemoveFav from "./ButtonRemoveFav";

const Card = ({ dentist }) => {
  const {name, username, id} = dentist;
  const {setFavsInStorage, removeFavFromStorage} = useContextGlobal();

  const addFav = () => {
    setFavsInStorage(dentist);
  }
  const removeFav = () => {
    removeFavFromStorage(id);
  }
  // window.location.pathname

  return (
    <div className="card">
        <Link to={`dentist/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
          { /*<img src="../images/doctor.jpg" alt="Imagen de doctor"/> */}
          <h1>{name}</h1>
          <p>Username: {username}</p>
          <p>Id: {id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {window.location.pathname === "/home" ||
        window.location.pathname === "/" &&
        <ButtonAddFav addFav={addFav}/>}
        {window.location.pathname === "/fav" &&
          <ButtonRemoveFav removeFav={removeFav}/>
        }
    </div>
  );
};

export default Card;
