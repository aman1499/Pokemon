import React from "react";
import "./styles/App.scss";
import Navbar from "./components/navbar/Navbar";
import Pokemons from "./components/pokemons/Pokemons";
import {Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPokemon from "./components/pokemons/AddPokemon";
import EditPokemon  from "./components/pokemons/EditPokemon";




function App() {
  return (
    <Provider store={store}>
      
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Pokemons} />
                <Route exact path="/pokemons/add" component={AddPokemon} />
                <Route
                  exact
                  path="/pokemons/edit/:id"
                  component={EditPokemon}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
     
    </Provider>
  );
}

export default App;

