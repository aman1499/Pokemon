import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonRedcuer";

export default combineReducers({
  pokemon: pokemonReducer,
});
