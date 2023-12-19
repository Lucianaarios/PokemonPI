const {Pokemon} = require('../db');

const deleteInDb = async(id) =>{
    try {
       const deleted = await Pokemon.destroy({where: {id}})
        if(deleted){
            return deleted
        }
        
    } catch (error) {
        return error.message
    }
}

module.exports = deleteInDb