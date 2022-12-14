import {getOne, updateOne, deleteOne } from "../api/dashboardApi";
import Menu from "../components/menu";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export function Dashboard(props) {
  const { register, handleSubmit } = useForm();
  const [setPokemon, setPokemonUpdate]=useState();
  async function onSubmitShow(data) {
    
  }

  function onSubmitRename(data) {
    updateOne(data.oldvalues, data.newvalues)
    console.log(data)
  }
  function onSubmitDel(data) {
    deleteOne(data.delname)
    console.log(data)
  }


  return (<div>
    <Menu />
    <div className="showPoke">
      <h2>Afficher un Pokemon  </h2>
      <form onSubmit={handleSubmit(onSubmitShow)}>
        <input {...register("showname")} placeholder="Nom du Pokemon" />
        <button type="submit">Valider</button>
      </form>
      <div>

      </div>

    </div>
    <br /><br />
    <div className="renamePoke">
      <h2>Renommer un Pokemon</h2>
      <form onSubmit={handleSubmit(onSubmitRename)}>
        <input {...register("oldvalues")} placeholder="Ancien Nom du Pokemon" />
        <input {...register("newvalues")} placeholder="Nouveau Nom du Pokemon" />
        <button type="submit">Valider</button>
      </form>
    </div>
    <br /><br />
    <div className="delPoke">
      <h2>Supprimer un Pokemon</h2>
      <form onSubmit={handleSubmit(onSubmitDel)}>
        <input {...register("delname")} placeholder="Nom du Pokemon" />
        <button type="submit">Valider</button>
      </form>
    </div>
  </div>
  );
}
