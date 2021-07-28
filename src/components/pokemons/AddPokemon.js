import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../action/pokemonAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddPokemon = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  const craetePokemon = (e) => {
    e.preventDefault();
    const new_pokemon = {
      id: shortid.generate(),
      name: name,
      category: category,
      desc: desc,
    };
    dispatch(addPokemon(new_pokemon));
    history.push("/"); 
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Your Pokemon</div>
      <div className="card-body">
        <form onSubmit={(e) => craetePokemon(e)}>
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
            Your Pokemon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPokemon;