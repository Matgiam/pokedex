import { useEffect, useState } from 'react';
import { useParams, Link, useFetcher } from 'react-router';
import DATA from "../data/pokemon.json"
function PokemonDetail(){
    const {id} = useParams();
   const pokemon = DATA.find((p) => p.id == id)
    return (
        <div>
            <h1> Generation: {pokemon.generation}</h1>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.image} alt="" />
            <h2>{pokemon.type}</h2>
     <Link to={`/`}>
<button>Go back</button>
</Link>
        </div>
    )
}

export default PokemonDetail;