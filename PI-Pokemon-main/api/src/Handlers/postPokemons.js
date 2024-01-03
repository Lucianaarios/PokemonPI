const { addPokemon } = require('../Controllers/addInDb');

const postPokemons = async (req, res) => {
    try {
        const { name, sprite, hp, atk, def, spd, spAtk, spDef, height, weight, types } = req.body
         if (!name || !sprite || !hp || !atk || !def || !spAtk || !spDef) {
            throw new Error('Faltan datos')
        }
        else{
            const lowerName = name.toLowerCase()
            const newPokemon = await addPokemon(lowerName, sprite, hp, atk, def, spd, spAtk, spDef, height, weight, types)
            if (newPokemon) {
                const pokemonTypes = await newPokemon.getTypes();
                const typesJSON = pokemonTypes.map(type => type.toJSON());
                const responseJSON = {
                    message: 'Pokemon created successfully',
                    pokemon: {
                      id: newPokemon.id,
                      name: newPokemon.name,
                      sprite: newPokemon.sprite,
                      hp: newPokemon.hp,
                      atk: newPokemon.atk,
                      def: newPokemon.def,
                      spd: newPokemon.spd,
                      spAtk: newPokemon.spAtk,
                      spDef: newPokemon.spDef,
                      height: newPokemon.height,
                      weight: newPokemon.weight,
                      types: typesJSON, 
                    },
                };
                res.status(200).json(responseJSON);
            }
        }
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
};

module.exports = postPokemons;
