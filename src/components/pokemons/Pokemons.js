import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pokemon from "./Pokemon";
import {
  selectAllPokemon,
  clearAllPokemon,
  deleteAllPokemon,
} from "../../action/pokemonAction";

const Pokemons = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllPokemon(pokemons.map((pokemon) => pokemon.id)));
    } else {
      dispatch(clearAllPokemon());
    }
  }, [selectAll]);

  return (
    <div>
      {selectedPokemons.length  > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllPokemon())}
        >
          delete all
        </button>
      ) : null}
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th className="hover">Name</th>
            <th className="hover">Category</th>
            <th className="hover"> Description</th>
            <th className="hover">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.map((pokemon) => (
            <Pokemon pokemon={pokemon} key={pokemon.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pokemons;