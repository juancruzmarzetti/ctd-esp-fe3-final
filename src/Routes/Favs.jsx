import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState, state} = useContextGlobal();


  console.log(favState);
  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favState.map((dentist) => (
          <Card key={dentist.id} dentist={dentist}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;
