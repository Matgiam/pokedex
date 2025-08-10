import { useState } from "react";
import DATA from "../data/pokemon.json";
import PokemonCounter from "../components/PokemonCounter";
import SearchFilter from "../components/SearchFilter";
import GenerationCounter from "../components/GenerationCounter";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [ownedPokemon, setOwnedPokemon] = useState({}); // { id: true/false }

  const generations = [1, 2, 3, 4, 5];

  const handleToggleOwned = (id, isOwned) => {
    setOwnedPokemon((prev) => ({
      ...prev,
      [id]: isOwned,
    }));
  };
// ...prev (spread operator):
// This syntax copies all properties of the prev object into a new object.
// For example, if prev = { a: 1, b: 2 }, 
// then { ...prev, c: 3 }
//creates { a: 1, b: 2, c:

//Concrete example of handleToggleOwned:
// Example 1: handleToggleOwned(2, true)
// Previous state:

// prev = {
//   1: true,
//   2: false,
//   3: true
// }

// New state will be:

// {
//   ...prev,       // copies all properties from prev
//   [2]: true      // updates id 2 to true
// }

// Which means:
// {
//   1: true,
//   2: true,    // changed from false to true
//   3: true
// }

  const checkedCount = Object.values(ownedPokemon).filter(Boolean).length; //Passing Boolean to .filter() removes all falsy values (false, null, undefined, 0, "", etc.).



  const filteredPokemon = DATA.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Pokedex</h1>

      <PokemonCounter count={checkedCount} total={DATA.length} />
      <SearchFilter onSearch={setSearchTerm} />

      {generations.map((gen) => {
        const genPokemon = filteredPokemon.filter(
          (pokemon) => pokemon.generation === gen
        );
        if (genPokemon.length === 0) return null;
const getOwnedCount = genPokemon.filter((p) => ownedPokemon[p.id]).length;
        return (
          <div key={gen}>
            <h1>Generation {gen}</h1>
            <GenerationCounter count= {getOwnedCount} total={genPokemon.length}/>
            <div className="pokemon-list">
              {genPokemon.map((pokemon) => (
            <PokemonCard
  key={pokemon.id}
  id={pokemon.id}
  name={pokemon.name}
  image={pokemon.image}
  type={pokemon.type}
  isOwned={!!ownedPokemon[pokemon.id]}  // <-- pass this prop here
  onToggle={handleToggleOwned}
/>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
