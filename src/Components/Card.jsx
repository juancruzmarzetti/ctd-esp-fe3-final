import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import ButtonAddFav from "./ButtonAddFav";
import ButtonRemoveFav from "./ButtonRemoveFav";

const Card = ({ dentist }) => {
  const {name, username, id} = dentist;
  const {setFavsInStorage, removeFavFromStorage, setNavState} = useContextGlobal();

  const addFav = () => {
    setFavsInStorage(dentist);
  }
  const removeFav = () => {
    removeFavFromStorage(id);
  }
  // window.location.pathname

  return (
    <div>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="../images/doctor.jpg" alt="Imagen de doctor" />
          <div className="px-6 py-4">
            <Link to={`dentist/${id}`} onClick={() => setNavState(`dentist/${id}`)}>
              <div className="font-bold text-xl mb-2">{name}</div>
              <p className="text-gray-700 text-base">Username: {username}</p>
              <p className="text-gray-700 text-base">Id: {id}</p>
            </Link>
            {window.location.pathname === "/home" ||
              window.location.pathname === "/" &&
              <ButtonAddFav addFav={addFav}/>}
            {window.location.pathname === "/fav" &&
              <ButtonRemoveFav removeFav={removeFav}/>
            }
          </div>
        </div>
    </div>
    
  );
};

export default Card;
