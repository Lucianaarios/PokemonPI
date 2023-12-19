import { GET_POKEMON_BY_NAME,CURRENT_PAGE,CLEAN_POKEMON_BY_NAME, CLEAN_POKEMON_BY_ID , ALL_POKEMONS,GET_TYPES, FILTER, FILTER_BY_TYPE, ORDER_ALF, ORDER_ATK, GET_POKEMON_BY_ID } from "./actions-type";
import axios from 'axios';

export const cleanPokemonById = () =>{
    return{
        type: CLEAN_POKEMON_BY_ID
    }
}

export const setCurrentPage = (payload) =>{
    return{
        type: CURRENT_PAGE,
        payload: payload
    }
}

export const cleanPokemonByName = (id) =>{
    return{
        type: CLEAN_POKEMON_BY_NAME
    }
}

export const orderAlf = ( payload) =>{
    return{
        type: ORDER_ALF,
        payload: payload
    }
}

export const orderAtk = (payload) =>{
    return{
        type: ORDER_ATK,
        payload: payload
    }
}

export const filter = (byDb) =>{
    return{
        type: FILTER,
        payload: byDb
    }
}

export const filterByType = (typeId) =>{
    return{
        type: FILTER_BY_TYPE,
        payload: typeId
    }
}


export const allPokemons = () =>{
    const endpoint = 'http://localhost:3001/pokemons';
    return async(dispatch) =>{
        try {
            const {data} = await axios(endpoint)

            return(dispatch)({
                type: ALL_POKEMONS,
                payload: data
            })
        } catch (error) {
            throw new Error(error.message);
        }
        
    }
}


export const getPokemonByName = (name) =>{
    const endpoint = `http://localhost:3001/name?name=${name}`
    return async(dispatch)=>{
        try {
            const {data} = await axios(endpoint);

            return(dispatch)({
                type: GET_POKEMON_BY_NAME,
                payload: data
            })
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export const pokemonByID = (id) =>{
    const endpoint = `http://localhost:3001/pokemons/${id}`
    return async(dispatch)=>{
        try {
            const {data} = await axios(endpoint)

            return (dispatch)({ 
                type: GET_POKEMON_BY_ID,
                payload: data
        })
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export const getTypes = () =>{
    const endpoint = 'http://localhost:3001/types';
    return async(dispatch)=>{
        try {
            const {data} = await axios(endpoint)

            return(dispatch)({
                type: GET_TYPES,
                payload: data
            })
        } catch (error) {
            throw new Error(error.message);
        }
    }
}