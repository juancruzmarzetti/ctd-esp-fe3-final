import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";
import ButtonAddFav from "./ButtonAddFav";
import ButtonRemoveFav from "./ButtonRemoveFav";
import ButtonFaved from "./ButtonFaved";

const Card = ({ dentist, theme }) => {
  const {name, username, id} = dentist;
  const {setFavsInStorage, removeFavFromStorage, setNavState, favState} = useContextGlobal();

  const addFav = () => {
    setFavsInStorage(dentist);
  }
  const removeFav = () => {
    removeFavFromStorage(id);
  }

  const isFaved = (idCard) => {
    let response = true;
    const findById = (fav) => fav.id === idCard;
    const indexFindedById = favState.findIndex(findById);
    if(indexFindedById >= 0){
      return response;
    }else{
      response = false;
    }
    return response;
  }

  const renderButton = () => {
    const isFavedFlag = isFaved(id);
    const isHomePath = window.location.pathname === "/home" || window.location.pathname === "/";
    const isFavPath = window.location.pathname === "/fav";

    if(isFavedFlag && isHomePath){
      return <ButtonFaved theme={theme} />;
    }else if (isHomePath){
      return <ButtonAddFav addFav={addFav} theme={theme}/>;
    }else if (isFavPath) {
      return <ButtonRemoveFav removeFav={removeFav} theme={theme}/>;
    }
  }

  return (
    <div>
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <div className={`max-w-sm rounded overflow-hidden shadow-lg ${theme === "dark" && "bg-gray-800"}`}>
          <img className="w-full" src="../images/doctor.jpg" alt="Imagen de doctor" />
          <div className="px-6 py-4">
            <Link to={`dentist/${id}`} onClick={() => setNavState(`dentist/${id}`)}>
              <div className={`font-bold text-xl mb-2 ${theme === "dark" && "text-white"}`}>{name}</div>
              <p className={`text-base ${theme === "dark" ? "text-white" : "text-gray-700"}`}>Username: {username}</p>
              <p className={`text-base ${theme === "dark" ? "text-white" : "text-gray-700"}`}>Id: {id}</p>
            </Link>
            {renderButton()}
          </div>
        </div>
    </div>
    
  );
};

export default Card;