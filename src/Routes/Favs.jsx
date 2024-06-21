import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import ButtonDeleteAllFavs from "../Components/ButtonDeleteAllFavs";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState, state, deleteAllFavsFromStorage} = useContextGlobal();

  return (
    <div className={`${state.theme} pb-10 flex flex-col items-center justify-center flex-grow`}>
      <h1 className="font-bold text-xl pt-10 pb-10">Dentists Favs</h1>
      <div className="card-grid">
        {favState.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} theme={state.theme}/>
        ))}
      </div>
      {favState.length >= 1 ?
      <ButtonDeleteAllFavs theme={state.theme} deleteAllFavsFromStorage={deleteAllFavsFromStorage}/> :
      <p>The favorites list is empty</p>}
    </div>
  );
};

export default Favs;
