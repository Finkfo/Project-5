import { updateOne } from "../api/dashboardApi";
import Menu from "../components/menu";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export function Dashboard(props) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    updateOne(data.oldvalues, data.newvalues)
console.log(data)
  }
  
  return (<div>
    <Menu />
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("oldvalues")} placeholder="Ancien Nom du Pokemon" />
      <input {...register("newvalues")} placeholder="Nouveau Nom du Pokemon" />
      <button type="submit">Valider</button>
    </form>
  </div> 
  );
}
