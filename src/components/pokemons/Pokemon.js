import React from "react";
import { Link } from "react-router-dom";
import { deletePokemon } from "../../action/pokemonAction";
import { useDispatch } from "react-redux";

const Pokemon = ({ pokemon, selectAll }) => {
  const dispatch = useDispatch();
  const { name, category, desc, id } = pokemon;
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
     <td>
       {name}
     </td>

      <td>{category}</td>
      <td>{desc}</td>
      <td className="actions">
        <Link to={`/pokemons/edit/${id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span class="material-icons" 
        onClick={() => dispatch(deletePokemon(id))}>
                clear
              </span>
          
        
       
      </td>
    </tr>
  );
};

export default Pokemon;
