const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,   
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true,
      validate:{
        notNull:{
           msg: "Name is required"//verificar si el nombre no es null
        },
        notEmpty:{
          msg: "Name can't be empty"//verificar si el nombre no esta vacio
        },
        len:{
          args: [3, 50],
          msg: "Name must be between 3 and 50 characters"//verificar si el nombre tiene entre 3 y 50 caracteres
        },
      }
    },
    sprite:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isUrl: {
          msg: "Image must be an URL"//verificar si la imagen es una URL
        },
        notEmpty:{
          msg: "Image can't be empty"//verificar si la imagen no esta vacia
        },
        notNull:{
          msg: "Image is required"//verificar si la imagen no es null
        },
      }
    },
    hp:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric:{
          msg: "Hp must be a number"//verificar si los puntos de vida son un numero
        },
        notNull:{
          msg: "Hp is required"//verificar si los puntos de vida no son null
        },
        notEmpty:{
          msg: "Hp can't be empty"//verificar si los puntos de vida no estan vacios
        },
        min:{
          args: [100],
          msg: "Hp must be greater than 100"//verificar si los puntos de vida son mayores a 100
        },
        max:{
          "args": [500],
          msg: "Hp must be less than 500"//verificar si los puntos de vida son menores a 500
        }
      }
    },
    atk:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric:{
          msg: "Attack must be a number"//verificar si los puntos de ataque son un numero
        },
        notNull:{
          msg: "Attack is required"//verificar si los puntos de ataque no son null
        },
        notEmpty:{
          msg: "Attack can't be empty"//verificar si los puntos de ataque no estan vacios
        },
        min:{
          args: [5],
          msg: "Attack must be greater than 5"//verificar si los puntos de ataque son mayores a 5
        },
        max:{
          args: [200],
          msg: "Attack must be less than 200"//verificar si los puntos de ataque son menores a 200
        }
      }
    },
    spAtk:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric:{
          msg: "Attack must be a number"//verificar si los puntos de ataque son un numero
        },
        notNull:{
          msg: "Attack is required"//verificar si los puntos de ataque no son null
        },
        notEmpty:{
          msg: "Attack can't be empty"//verificar si los puntos de ataque no estan vacios
        },
        min:{
          args: [5],
          msg: "Attack must be greater than 5"//verificar si los puntos de ataque son mayores a 5
        },
        max:{
          args: [200],
          msg: "Attack must be less than 200"//verificar si los puntos de ataque son menores a 200
        }
      }
    },
    def:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric:{
          msg: "Defense must be a number"//verificar si los puntos de defensa son un numero
        },
        notNull:{
          msg: "Defense is required"//verificar si los puntos de defensa no son null
        },
        notEmpty:{
          msg: "Defense can't be empty"//verificar si los puntos de defensa no estan vacios
        },
        min:{
          args: [5],
          msg: "Defense must be greater than 5"//verificar si los puntos de defensa son mayores a 5
        },
        max:{
          args: [200],
          msg: "Defense must be less than 200"//verificar si los puntos de defensa son menores a 200
        }
      }
    },
    spDef:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric:{
          msg: "Defense must be a number"//verificar si los puntos de defensa son un numero
        },
        notNull:{
          msg: "Defense is required"//verificar si los puntos de defensa no son null
        },
        notEmpty:{
          msg: "Defense can't be empty"//verificar si los puntos de defensa no estan vacios
        },
        min:{
          args: [5],
          msg: "Defense must be greater than 5"//verificar si los puntos de defensa son mayores a 5
        },
        max:{
          args: [200],
          msg: "Defense must be less than 200"//verificar si los puntos de defensa son menores a 200
        }
      }
    },
    spd:{
      type: DataTypes.INTEGER,
      validate:{
        isNumeric:{
          msg: "Speed must be a number"//verificar si los puntos de velocidad son un numero
        },
        min:{
          args: [10],
          msg: "Speed must be greater than 10"//verificar si los puntos de velocidad son mayores a 5
        },
        max:{
          args: [150],
          msg: "Speed must be less than 150"//verificar si los puntos de velocidad son menores a 200
        }
      }
    },
    height:{
      type: DataTypes.INTEGER,
      validate:{
        isNumeric:{
          msg: "Height must be a number"//verificar si la altura es un numero
        },
        min:{
          args: [1],
          msg: "Height must be greater than 1"//verificar si la altura es mayor a 1
        },
        max:{
          args: [150],
          msg: "Height must be less than 15"//verificar si la altura es menor a 15
        },
      }
    },
    weight:{
      type: DataTypes.INTEGER,
      validate:{
        isNumeric:{
          msg: "Weight must be a number"//verificar si el peso es un numero
        },
        min:{
          args: [1],
          msg: "Weight must be greater than 1"//verificar si el peso es mayor a 1
        },
        max:{
          args: [1000],
          msg: "Weight must be less than 100"//verificar si el peso es menor a 100
        }
      }
    },
  }, {
    timestamps: false,});
};