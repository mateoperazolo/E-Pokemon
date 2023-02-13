import React from "react";
import { Navigation } from "./components/Navigation/index";

const navItems = [
  {nombre:'Home', link:'/'},
  {nombre:'Pokemons', link:'/pokemons'},
  {nombre:'Support', link:'/support'},
  {nombre:'Contact Us', link:'/contact'},
  {nombre:'Josecito', link:'/contact'}
]

function PlayGround() {
  return (
    <Navigation items={navItems} />
  )
}

export { PlayGround };
