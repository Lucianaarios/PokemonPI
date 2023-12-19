const validate = (data) => {
    let errors = {
        name: null,
        sprite: null,
        hp: null,
        atk: null,
        spAtk: null,
        def: null,
        spDef: null,
        spd: null,
        types: null,
        height: null,
        weight: null    };

    // Validaciones para name
    if (data.name.trim().length === 0) {
        errors.name = 'Name cannot be an empty field';
    } else if (data.name.length > 49) {
        errors.name = 'The name cannot be more than 20 characters';
    }

    // Validaciones para image
    if (data.sprite.trim().length === 0) {
        errors.sprite = 'La imagen no puede estar vacía';
      } else if (!/\.(jpeg|jpg|png|gif|webp|bmp|svg)$/i.test(data.sprite)) {
        errors.sprite = 'La imagen debe ser una URL de formato válido (JPEG, JPG, PNG, GIF, WEBP, BMP, SVG)';
      }
      
    // Validaciones para hp
    if (data.hp.trim().length === 0) {
        errors.hp = 'HP cannot be an empty field'
    } else if (!Number(data.hp)) {
        errors.hp = 'You must enter a number for HP'
    }

    // Validaciones para attack
    if (data.atk.trim().length === 0) {
        errors.atk = 'Attack cannot be an empty field'
    } else if (!Number(data.atk)){
        errors.atk = 'You must enter a number for Attack'
    }

    if (data.spAtk.trim().length === 0) {
        errors.spAtk = 'Attack cannot be an empty field'
    } else if (!Number(data.spAtk)){
        errors.spAtk = 'You must enter a number for Attack'
    }

    // Validaciones para defense
    if (data.def.trim().length === 0) {
        errors.def = 'Defense cannot be an empty field'
    } else if (!Number(data.def)) {
        errors.def = 'You must enter a number for Defense'
    }

    if (data.spDef.trim().length === 0) {
        errors.spDef = 'Defense cannot be an empty field'
    } else if (!Number(data.spDef)) {
        errors.spDef = 'You must enter a number for Defense'
    }

    // Validaciones para speed
    if (data.spd.trim().length === 0) {
        errors.spd = 'Speed cannot be an empty field'
    } else if (!Number(data.spd)) {
        errors.spd = 'You must enter a number for Speed'
    }

    // Validaciones para height
    if (data.height.trim().length === 0) {
        errors.height = 'Height cannot be an empty field'
    } else if (!Number(data.height)) {
        errors.height = 'You must enter a number for Height'
    }

    // Validaciones para weight
    if (data.weight.trim().length === 0) {
        errors.weight = 'Weight cannot be an empty field'
    } else if (!Number(data.weight)) {
        errors.weight = 'You must enter a number for Weight'
    }

    // Validación para los types
    if (data.types.length === 0) {
        errors.types = 'Please select at least one type';
    }

    return errors;
}

export default validate;
