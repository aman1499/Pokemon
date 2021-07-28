import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getPokemon, updatePokemon } from "../../action/pokemonAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditPokemon = () => {
    let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon.pokemon);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (pokemon != null) {
      setName(pokemon.name);
      setCategory(pokemon.category);
      setDesc(pokemon.desc);
    }
    dispatch(getPokemon(id));
  }, [pokemon]);

  const onUpdatePokemon = (e) => {
    e.preventDefault();

    const update_pokemon = Object.assign( pokemon,{
     // id: shortid.generate(),
      name: name,
      category: category,
      desc: desc,
    });
    dispatch(updatePokemon(update_pokemon));
    history.push("/"); 
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Your Pokemon</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdatePokemon(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pokemon Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pokemon Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Pokemon Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Update Pokemon
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPokemon;