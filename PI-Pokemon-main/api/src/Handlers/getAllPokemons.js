const {getAllPokemonsByDb, getAllDbPokemons} = require('../Controllers/getInDb')
const axios = require('axios');
const mapPropertys = require('../helpers/mapPropertys')


const getAllPokemons = async(req, res) =>{
    try {
        const URL = 'https://pokeapi.co/api/v2/pokemon'

        const limit = 200;

        const {data} = await axios(`${URL}?limit=${limit}&offset=00`);

        const pokemons = data.results

        const listPokemons = await Promise.all(pokemons.map(async(pokemon) =>{
            const {data} = await axios(pokemon.url);

            const character = mapPropertys(data);

           

            return character;

            
        }))
        const pokemonsByDb = await getAllPokemonsByDb()
        let allPokemon = [ ...listPokemons,...pokemonsByDb];

        
        const dbPokemons = await getAllDbPokemons()
        
        if(dbPokemons){
            allPokemon = [ ...listPokemons,...dbPokemons];
        }
        
        
        res.status(200).json(allPokemon)
        
        return allPokemon

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = getAllPokemons
