import { Outlet, Link } from "react-router";
import { useState } from "react";
import DATA from "../data/pokemon.json"
import SearchFilter from "../components/SearchFilter";
import PokemonCard from '../components/PokemonCard';
function Home (){
    const [searchTerm, setSearchTerm] = useState("")
    const filteredPokemon = DATA.filter((pokemon)=>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
 <div>
  <h1>Pokedex</h1>
  <SearchFilter onSearch={setSearchTerm}/>
  <button><Link to= "/pokemondetail">Pokemondetail</Link></button>
  <div className="pokemon-list">
    {filteredPokemon.map((pokemon)=>(
            
<div key={pokemon.id}className="pokemonCard">
<PokemonCard name={pokemon.name} image={pokemon.image}/>
</div> 

  ))}
  </div>
</div>
    )
}

export default Home;