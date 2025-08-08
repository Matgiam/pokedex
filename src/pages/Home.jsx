import { Outlet, Link } from "react-router";
import DATA from "../data/pokemon.json"
import PokemonCard from '../components/PokemonCard';
function Home (){
    return (
 <div>
  <h1>Pokedex</h1>
  <button><Link to= "/pokemondetail">Pokemondetail</Link></button>
  <div className="pokemon-list">
    {DATA.map((pokemon)=>(
            
<div key={pokemon.id}className="pokemonCard">
<PokemonCard name={pokemon.name} image={pokemon.image}/>
</div> 

  ))}
  </div>
</div>
    )
}

export default Home;