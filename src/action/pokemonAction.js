import {
    CREATE_POKEMON,
    GET_POKEMON,
    UPDATE_POKEMON,
    DELETE_POKEMON,
    SELECT_POKEMON,
    CLEAR_POKEMON,
    DELETE_SELECTED_POKEMON,
    } from "../constant/types";
  
  // actions
  export const addPokemon = (pokemon) => ({
    type: CREATE_POKEMON,
    payload: pokemon,
  });
  
  // get a pokemon
  export const getPokemon = (id) => ({
    type: GET_POKEMON,
    payload: id,
  });
  
  // update a pokemon
  export const updatePokemon = (pokemon) => ({
    type: UPDATE_POKEMON,
    payload: pokemon,
  });
  
  // delete a pokemon
  export const deletePokemon = (id) => ({
    type: DELETE_POKEMON,
    payload: id,
  });
  // select all pokemon
export const selectAllPokemon = (id) => ({
  type: SELECT_POKEMON,
  payload: id,
});

// clear selected pokemon
export const clearAllPokemon = () => ({
  type: CLEAR_POKEMON,
});

// delete selected pokemon
export const deleteAllPokemon = () => ({
  type: DELETE_SELECTED_POKEMON,
});

 
  