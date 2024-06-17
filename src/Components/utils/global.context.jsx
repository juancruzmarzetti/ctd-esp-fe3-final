import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { favReducer, reducer } from "./reducer";

const initialState = {theme: "", data: []}
const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://jsonplaceholder.typicode.com/users`;

  const getFavsFromStorage = () => {
    const localFavs = localStorage.getItem("favs");
    try{
      return localFavs ? JSON.parse(localFavs) : [];
    }catch(error){
      console.error("Error parsing JSON from localStorage", error);
       
      return [];
    }
}

  const favInitialState = getFavsFromStorage();
  const [favState, favDispatch] = useReducer(favReducer, favInitialState);

  const setFavsInStorage = (fav) => {
    favDispatch({type: "SAVE_FAV", payload: fav});
  };

  const getData = async () => {
    try{
      let res = await axios(url);
      dispatch({type: "GET_DENTISTS", payload: res.data})
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch, favState, setFavsInStorage}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
}