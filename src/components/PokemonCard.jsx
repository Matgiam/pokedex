function PokemonCard(props){
    return(
       
<div key={props.id}className="pokemonCard">
<h1 >{props.name}</h1>
<img src={props.image} alt="" />
<h3>{props.type}</h3>
<h4>{props.generation}</h4>
</div> 
    
    )
}
export default PokemonCard;