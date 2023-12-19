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
                res.status(200).json({message: 'Pokemon created sucefull'})
            }
        }
    } 
    catch (error) {
        res.status(404).send(error.message)
    }
};

module.exports = postPokemons;
