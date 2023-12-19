const { Type, Pokemon } = require('../db');

const addTypesInDb = async (data) => {
    try {
        const typesMap = data.map(type => ({
            where: { name: type.name },
            defaults: { id: Number(type.url.split('/').filter(Boolean).pop()) }
        }));

        for (const typeData of typesMap) {
            await Type.findOrCreate(typeData);
        }

        const dbTypes = await Type.findAll();

        return dbTypes;
    } catch (error) {
        throw new Error('No se pudo agregar el Type');
    }
};

const addPokemon = async (name, sprite, hp, atk, def, spd, spAtk, spDef, height, weight, types) => {
    if (types.length > 0 && types.length <= 2) {
        const [newPokemon, create] = await Pokemon.findOrCreate({
            where: { name: name,  sprite },
            defaults: { name, sprite, hp, atk, def, spd, spAtk, spDef, height, weight }
        })
            
        if (create) {
            const addTypes = await Type.findAll({
                where: {
                     name: types
                }
            })
            
            return await newPokemon.addType(addTypes);
        } else {
            throw new Error('El pokemon ya existe')
        }
    }
    else {
        throw new Error('El nuevo pokemón no puede tener más de dos tipos')
    }
};




module.exports = {
    addTypesInDb, 
    addPokemon
}