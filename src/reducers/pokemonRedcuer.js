import {
    CREATE_POKEMON,
    GET_POKEMON,
    UPDATE_POKEMON,
    DELETE_POKEMON,
    SELECT_POKEMON,
    CLEAR_POKEMON,
    DELETE_SELECTED_POKEMON,
  } from "../constant/types";
//Random data not accruate
  const intialState ={
   pokemons:[
       {
        name: "Pikachu",
        category :"Electric",
       desc : "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",
        id : 1
      },
      {
        name: "Bulbasaur",
        category :"Water",
        desc : "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        id: 2
      },
      {
        name: "Idiglett",
         category :"Mole",
         desc : "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops",
        id: 3
      },
      {
        name: "Venonat",
        category :"Insect",
        desc : "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes",
        id: 4
      },
      {
        name: "Paras",
        category :"Mushroom",
        desc : "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition",
        id: 5
      },
      {
        name: "Vileplume",
        category :"Flower",
        desc : "It has the world’s largest petals. With every step, the petals shake out heavy clouds of toxic pollen",
        id: 6
      },
      {
        name: "Vulpix",
        category :"Fox",
        desc : "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
        id: 7
      },
      {
        name: "Ninetales",
        category :"Fox",
        desc : "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers",
        id: 8
      },
      {
        name: "Clefable",
        category :"Fairy",
        desc : "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people",
        id: 9
      },
      {
        name: "Gloom",
        category :"Weed",
        desc : "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles",
        id: 10
      },
      {
        name: "Riacu",
        category :"Poison",
        desc : "Its long tail serves as a ground to protect itself from its own high-voltage power",
        id: 11
      }
    ],
      pokemon: null,
      selectedPokemons: [],
    };


  export const pokemonReducer = (state = intialState, action) => {
    switch (action.type) {
      case CREATE_POKEMON:
        return {
          ...state,
          pokemon: [action.payload, ...state.pokemons],
        };
      case GET_POKEMON:
        let arr = state.pokemons.filter(
          ( pokemon) =>  pokemon.id == action.payload
        );
        arr = arr.values();
        for (let val of arr) {
          arr = val;
        }
        return {
          ...state,
          pokemon: arr,
        };
      case UPDATE_POKEMON:
        return {
          ...state,
          pokemons: state.pokemons.map(( pokemon) =>
          pokemon.id == action.payload.id ? action.payload :  pokemon
          ),
        };
      case DELETE_POKEMON:
        return {
          ...state,
          pokemons: state.pokemons.filter(
            (pokemon) =>  pokemon.id != action.payload
          ),
        };
        case DELETE_SELECTED_POKEMON:
          return {
            ...state,
            pokemons: [],
          };
        case SELECT_POKEMON:
          return {
            ...state,
            selectedPokemons: action.payload,
          };
    
        case CLEAR_POKEMON:
          return {
            ...state,
            selectedPokemons: [],
          };
        default:
          return state;
    }
  };