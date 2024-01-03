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
    console.log('Tipos en la base de datos:', dbTypes.map(type => type.toJSON()));
    return dbTypes;
  } catch (error) {
    console.error('Error al agregar el Type:', error.message);
    throw new Error('No se pudo agregar el Type');
  }
};

const addPokemon = async (name, sprite, hp, atk, def, spd, spAtk, spDef, height, weight, types) => {
  console.log("data")
  try {
    console.log('Datos del nuevo Pokémon:', name, sprite, hp, atk, def, spd, spAtk, spDef, height, weight, types);

    // Validaciones
    if (!isImageUrl(sprite)) {
      throw new Error('Validation error: Image must be a valid URL');
    }

    if (hp < 100) {
      throw new Error('Validation error: Hp must be 100 or greater');
    }

    if (types.length > 0 && types.length <= 2) {
      const [newPokemon, created] = await Pokemon.findOrCreate({
        where: { name: name },
        defaults: { sprite, hp, atk, def, spd, spAtk, spDef, height, weight }
      });

      if (created) {
        console.log('Nuevo Pokémon creado:', newPokemon.toJSON());

        const typeNames = types.map(type => type.toLowerCase());

        const addTypes = await Type.findAll({
          where: {
            name: typeNames
          }
        });

        if (addTypes.length !== types.length) {
          const missingTypes = types.filter(type => !addTypes.some(dbType => dbType.name === type.toLowerCase()));
          throw new Error(`Los siguientes tipos no existen: ${missingTypes.join(', ')}`);
        }

        await newPokemon.addType(addTypes);
        console.log('Tipos agregados exitosamente.');

        return newPokemon;
      } else {
        console.error('El Pokémon ya existe en la base de datos');
        throw new Error('El Pokémon ya existe en la base de datos');
      }
    } else {
      console.error('El nuevo pokémon debe tener entre 1 y 2 tipos');
      throw new Error('El nuevo pokémon debe tener entre 1 y 2 tipos');
    }
  } catch (error) {
    console.error('Error al agregar el Pokémon:', error.message);
    throw new Error('Error al agregar el Pokémon');
  }
};

// Función para verificar si una cadena es una URL de imagen válida
function isImageUrl(url) {
  return /^https?:\/\//.test(url);
}

module.exports = {
  addTypesInDb,
  addPokemon
};