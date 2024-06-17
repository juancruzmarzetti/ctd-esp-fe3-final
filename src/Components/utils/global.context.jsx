import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { favReducer, reducer } from "./reducer";

const initialState = {theme: "light", data: []}
const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://jsonplaceholder.typicode.com/users`;

  const getFavsFromStorage = () => {
    const localFavs = localStorage.getItem("favs");
    return localFavs ? JSON.parse(localFavs) : [];
  }
  const changeTheme = () => {
    if(state.theme === "light"){
      dispatch({type: "CHANGE_THEME", payload: "dark"})
    }else{
      dispatch({type: "CHANGE_THEME", payload: "light"})
    }
  }

  const removeFavFromStorage = (id) => {
    favDispatch({type: "DELETE_FAV", payload: id});
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
    <ContextGlobal.Provider value={{state, dispatch, favState, setFavsInStorage, removeFavFromStorage, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
}