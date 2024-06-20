import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState, state} = useContextGlobal();


  console.log(favState);
  return (
    <div className={`${state.theme} pb-10`}>
      <h1 className="font-bold text-xl pt-10 pb-10">Dentists Favs</h1>
      <div className="card-grid">
        {favState.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} theme={state.theme}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;
