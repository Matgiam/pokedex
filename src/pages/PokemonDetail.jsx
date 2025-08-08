import { useEffect, useState } from 'react';
import { useParams, Link, useFetcher } from 'react-router';
import DATA from "../data/pokemon.json"
function PokemonDetail(){
    const {id} = useParams();
   const pokemonId = DATA.find((p) => p.id == id)
    return (
        <div>
            <h1>{pokemonId.name}</h1>
          
        </div>
    )
}

export default PokemonDetail;