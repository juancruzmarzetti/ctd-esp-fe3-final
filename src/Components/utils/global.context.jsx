import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { favReducer, reducer } from "./reducer";

const getNavStateFromStorage = () => JSON.parse(localStorage.getItem("navState")) || "Home";
const getThemeStateFromStorage = () => JSON.parse(localStorage.getItem("theme")) || "light";

const initialState = {theme: getThemeStateFromStorage(), data: [], navState: getNavStateFromStorage()}
const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://jsonplaceholder.typicode.com/users`;

  const getFavsFromStorage = () => {
    const localFavs = localStorage.getItem("favs");
    return localFavs ? JSON.parse(localFavs) : [];
  }

  const setNavState = (navPage) => {
    dispatch({type: "SET_NAV_STATE", payload: navPage});
  };

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

  const deleteAllFavsFromStorage = () => {
    favDispatch({type: "DELETE_ALL_FAVS"})
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
    <ContextGlobal.Provider value={{state, dispatch, favState, setFavsInStorage, removeFavFromStorage, changeTheme, setNavState, deleteAllFavsFromStorage}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
}