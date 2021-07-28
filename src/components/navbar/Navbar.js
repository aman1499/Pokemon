import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow navbar-expand-sm navbar-dark bg-primary">
            <h1 className="heading">Pokemon Era</h1>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src="images/images.jpg" alt="pokemon" />
        </Link>
        <div>
          <Link to="/pokemons/add" className="btn btn-light ml-auto">
           ADD POKEMON
          </Link>
        </div>
      </div>
  
    </nav>
  );
};

export default Navbar;