import { GET_POKEMON_BY_NAME,CLEAN_POKEMON_BY_ID,CURRENT_PAGE, CLEAN_POKEMON_BY_NAME,GET_POKEMON_BY_ID, ALL_POKEMONS,GET_TYPES, FILTER, FILTER_BY_TYPE, ORDER_ALF, ORDER_ATK, ADD_POKEMON } from "./actions-type";

const initialState = {
    allPokemons: [],
    allPokemonsCopy: [],
    pokemonsTypes: [],
    pokemonByName: [],
    pokemonFilter: [],
    orderBy: null,
    currentPage: 1,
    pokemonByID: []
}

const reducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case CLEAN_POKEMON_BY_ID:
          return{
            ...state,
            pokemonByID: []
          }

          case CURRENT_PAGE:
            return{
              ...state,
              currentPage: payload
            }
          
          case CLEAN_POKEMON_BY_NAME:
          return{
            ...state,
            pokemonByName: []
          }
        case ORDER_ALF:
      let orderByAlf;

      if (payload === "Ascendente") {
        orderByAlf = [...state.allPokemonsCopy].sort((a, b) => a.name.localeCompare(b.name));
      } 
      if (payload === "Descendente") {
        orderByAlf = [...state.allPokemonsCopy].sort((a, b) => b.name.localeCompare(a.name));
      }
      if(payload === "All"){
        orderByAlf= [...state.allPokemons]
      }

      return {
        ...state,
        allPokemonsCopy: orderByAlf,
        orderBy: "ALF"
      };

    case ORDER_ATK:
      const orderByAtk = [...state.allPokemonsCopy].sort((a, b) => {
        const atkA = Number(a.atk);
        const atkB = Number(b.atk);

        if (payload === "AtkAscendente") return atkB - atkA;
        else return atkA - atkB;
      });

      return {
        ...state,
        allPokemonsCopy: orderByAtk,
        orderBy: "ATK"
      };
        
        case ALL_POKEMONS:
            return{
                ...state,
                allPokemons: payload,
                allPokemonsCopy: payload,
            }

        case GET_TYPES: 
            return{
                ...state,
                pokemonsTypes: payload
            }
            
        case GET_POKEMON_BY_NAME:
            return{
                ...state,
                allPokemonsCopy: payload
            }
        case GET_POKEMON_BY_ID:
            return{
                ...state,
                pokemonByID: payload
            }
            case FILTER:
              let filteredPokemons;
              if (payload === "true") {
                filteredPokemons = state.allPokemons.filter(
                  (pkmn) => !Number.isInteger(pkmn.id)
                );
              } else if (payload === "false") {
                filteredPokemons = state.allPokemons.filter((pkmn) =>
                  Number.isInteger(pkmn.id)
                );
              } else {
                filteredPokemons = state.allPokemons;
              }
              return {
                ...state,
                allPokemonsCopy: filteredPokemons,
              };
        case FILTER_BY_TYPE:
            
        const filteredByType = payload === 'All' ? state.allPokemonsCopy = state.allPokemons  : state.allPokemons.filter((pokemon) => pokemon.types?.map((type) => type.name).includes(payload))
      

            return{
                ...state,
                allPokemonsCopy: filteredByType,
                pokemonFilter: filteredByType
            }

            case ADD_POKEMON:
      return {
        ...state,
        allPokemons: [...state.allPokemons, payload],
        allPokemonsCopy: [...state.allPokemonsCopy, payload],
      };
    
        default:
            return{
                ...state
            }
    }
    
}


  


export default reducer;