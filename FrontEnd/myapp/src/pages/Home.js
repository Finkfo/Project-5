import { useEffect, useState } from "react";
import { getAll } from "../api/pokemon";
import Menu from "../components/menu";

export function Home(props) {
  return (<div>
    <Menu />
    </div>
  );
}
