const mapProperys = (data) =>{
    const { id, name, weight, height, stats, sprites, types } = data;

    let sprite;

    if (sprites.versions["generation-v"]["black-white"].animated.front_default !==null) {
        sprite =
          sprites.versions["generation-v"]["black-white"].animated.front_default;
      } else if (sprites.other["official-artwork"].front_default !== null) {
        sprite = sprites.other["official-artwork"].front_default;
      } else {
        sprite =
          "https://archives.bulbagarden.net/media/upload/6/62/Ghost_I_purple.png";
      }

    const mapStats = {};

    for(const stat of stats){
        mapStats[stat.stat.name] = stat.base_stat
    }

    const hp = mapStats["hp"];
    const atk = mapStats["attack"];
    const def = mapStats["defense"];
    const spAtk = mapStats["special-attack"];
    const spDef = mapStats["special-defense"];
    const spd = mapStats["speed"];

    

    return{
    id,
    name,
    sprite,
    weight,
    height,
    hp,
    atk,
    def,
    spAtk,
    spDef,
    spd,
    types: types.map((type) => ({name: type.type.name})),
    }
}

module.exports = mapProperys