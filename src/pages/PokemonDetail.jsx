import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to get generation based on id (reuse from Home)
  const getGeneration = (id) => {
    const numId = Number(id);
    if (numId <= 151) return 1;
    if (numId <= 251) return 2;
    if (numId <= 386) return 3;
    if (numId <= 493) return 4;
    if (numId <= 649) return 5;
    if (numId <= 721) return 6;
    if (numId <= 809) return 7;
    if (numId <= 905) return 8;
    return 9;
  };

  useEffect(() => {
    setLoading(true);
    // Fetch detailed info for this pokemon by id
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Pokemon not found');
        return res.json();
      })
      .then(data => {
        // Build your pokemon object similar to what Home uses
        const pokemonData = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          type: data.types.map(t => t.type.name), // array of type names
          generation: getGeneration(data.id)
        };
        setPokemon(pokemonData);
        setLoading(false);
      })
      .catch(() => {
        setPokemon(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!pokemon) return <div>No data for this Pokémon</div>;

  return (
    <div>
      <h1>Generation: {pokemon.generation}</h1>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>Types: {pokemon.type.join(', ')}</h2>
      <Link to={`/`}>
        <button>Go back</button>
      </Link>
    </div>
  );
}

export default PokemonDetail;
