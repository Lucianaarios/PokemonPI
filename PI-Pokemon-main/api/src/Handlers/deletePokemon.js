const deleteInDb = require("../Controllers/deleteInDb");
const {Pokemon} = require('../db');

const deletePokemon = async(req, res) =>{
    try {
        const {id} = req.body
        console.log(id)
        const deleted = deleteInDb(id)
        if(deleted){
            return res.status(200).json({status: true, message: deleted})
        }else{
            return res.status(200).json({status: false, message: "no se pudo eliminar"})
        }
    } catch (error) {
        return res.status(500).json({status: false, message: "comunicate con el programador"})
    }
}

module.exports = deletePokemon