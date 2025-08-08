import { Outlet, Link } from "react-router";
import { useState } from "react";
import DATA from "../data/pokemon.json"
import SearchFilter from "../components/SearchFilter";
import PokemonCard from '../components/PokemonCard';
function Home (){
    const [searchTerm, setSearchTerm] = useState("")
    const generations = [1,2,3,4,5];
    const filteredPokemon = DATA.filter((pokemon)=>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
 <div>
  <h1>Pokedex</h1>
  <SearchFilter onSearch={setSearchTerm}/>
  {generations.map((gen) =>{
    const genPokemon = filteredPokemon.filter((pokemon)=> pokemon.generation === gen)
    if (genPokemon.length === 0) return null;

  return(
   <div key={gen}>
  <h2>Generation {gen} </h2>
  <div className="pokemon-list">
    {genPokemon.map((pokemon)=>(
            
<div key={pokemon.id}className="pokemonCard">
<PokemonCard id={pokemon.id} name={pokemon.name} image={pokemon.image}/>
</div> 

  ))}
  </div>
   </div>
  );
    })}
</div>
    )
}

export default Home;

