import { useState } from 'react';
import DATA from "../data/pokemon.json";

function PokemonCounter({ count, total }) {
  return (
    <div>
      <h2>Pokemons owned: {count}/{total}</h2>
    </div>
  );
}
export default PokemonCounter;
