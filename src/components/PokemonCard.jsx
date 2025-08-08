import { Link } from "react-router"
import PokemonDetail from "../pages/PokemonDetail";
 
function PokemonCard(props){
    return(
       
<div key={props.id}className="pokemonCard">
<h1 >{props.name}</h1>
<Link to={`/pokemondetail/${props.id}`}>
<img src={props.image} alt="" />
</Link>

<h3>{props.type}</h3>
<h4>{props.generation}</h4>
</div> 
    
    )
}
export default PokemonCard;