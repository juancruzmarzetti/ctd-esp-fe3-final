import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { favReducer, reducer } from "./reducer";

const initialState = {theme: "", data: []}
const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://jsonplaceholder.typicode.com/users`;

  //favs localstorage
  // TO DO
  const favInitialState = [];
  const [favState, favDispatch] = useReducer(favReducer, favInitialState);

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
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
}