import PokeCard from "./PokeCard";
import { pokemons } from "../../data/Pokedex-data";

// will need to do flex in here and wrap to make it look kinda like pintrest.
const PokeIndex = (props) => {
    return ( <>
    <div className="flexDiv">
        {pokemons.map((pokemon, index) => <PokeCard key={index}{...pokemon}/>)}
    </div>
    </> );
}
 
export default PokeIndex;