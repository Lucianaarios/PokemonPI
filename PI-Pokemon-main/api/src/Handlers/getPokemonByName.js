
const {getPokemonsByName} = require('../Controllers/getInDb')



const getPokemonByName = async(req, res) =>{
    try {
        const {name} = req.query
    
        const namePokemon = name.toLowerCase()

        const pokemonsByDb = await getPokemonsByName(namePokemon)

        

        if (pokemonsByDb) {
            return res.status(200).json(pokemonsByDb);
        }
        
    } catch (error) {
        console.error('Error al obtener Pokémon por nombre:', error);
    }
}

module.exports = getPokemonByName