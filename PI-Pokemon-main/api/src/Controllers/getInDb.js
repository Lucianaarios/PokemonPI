const {Pokemon, Type} = require('../db');
const mapProperys = require('../helpers/mapPropertys')
const axios = require('axios')

const getAllDbPokemons = async () => {
  try {
    const dbPokemons = await Pokemon.findAll({
      include: Type
    });
    const pokemonObject = dbPokemons.map((pokemon) => {
      const pokemonId = pokemon.id;
      const pokemonName = pokemon.name;
      const pokemonStats = [pokemon.hp, pokemon.atk, pokemon.def, pokemon.spAtk, pokemon.spDef, pokemon.spd];
      const pokemonSprite = {
        front_default: pokemon.sprite,
      }
      const pokemonTypes = pokemon.types.map((type) => type.name)

      const pokemonData ={
        pokemonId,
        pokemonName,
        pokemonStats,
        pokemonSprite,
        pokemonTypes,
        
      }
      return pokemonData;
    })

    return pokemonObject;
  } catch (error) {
    return null;
  }
};


const getPokemonById = async(idPokemon)=>{
    
  
    if(isNaN(idPokemon)){ //el id no es un num
    return await Pokemon.findOne({
      where: { id: idPokemon },
      include: {
        model: Type,
        attributes: {
          exclude: ["id"]
        },
        through: {
          attributes: []
        }
      }
    });
    
  }else{
    const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    
    if(data.name){
      const mappedPokemon = mapProperys(data)
     return mappedPokemon
  }
  }
    
  
}

const getAllPokemonsByDb = async() =>{
  try {
    const dbPokemons = await Pokemon.findAll({
     include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }
    })
    
    return dbPokemons
  } catch (error) {
    console.log(error.message)
  }
}

const getPokemonsByName = async(namePokemon) =>{
   
        const dbPokemon = await Pokemon.findAll({
            where: { name: namePokemon },
            include: {
              model: Type,
              attributes: {
                exclude: ["id"]
              },
              through: {
                attributes: []
              }
            }
          });
          

          if(dbPokemon.length === 0){
            const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
           return mapProperys(data)
          }
        return dbPokemon;
}

module.exports = {

 getPokemonById,
 getPokemonsByName,
 getAllPokemonsByDb,
  getAllDbPokemons
}