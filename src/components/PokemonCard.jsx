import { Link } from "react-router";
import '../styling/App.css';

function PokemonCard({ id, name, image, type, isOwned, onToggle }) {
  return (
    <div className="pokemonCard">
      <h2>{name}</h2>
      <Link to={`/pokemondetail/${id}`}>
        <img
          src={image}
          alt={name}
          className={`pokemon-img ${isOwned ? "owned" : "missing"}`}
        />
      </Link>

      <h3>{type}</h3>
     

      <label className="owned-label">
        <input
          type="checkbox"
          checked={isOwned}
          onChange={(e) => onToggle(id, e.target.checked)}
        />{" "}
        Owned
      </label>
    </div>
  );
}

export default PokemonCard;
