const axios = require('axios');
const {getPokemonById} = require('../Controllers/getInDb');
const { v4: uuidv4, validate: uuidValidate } = require("uuid");

const getPokemon = async(req, res) =>{
    try {
        const {idPokemon} = req.params;

        const pokemon = await getPokemonById(idPokemon)
        
        
    
        
          return res.status(200).json(pokemon)
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = getPokemon