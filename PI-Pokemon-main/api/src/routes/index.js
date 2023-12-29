const { Router } = require('express');
const getAllPokemons = require('../Handlers/getAllPokemons');
const getPokemon = require('../Handlers/getPokemon');
const getPokemonByName = require('../Handlers/getPokemonByName');
const getTypes = require('../Handlers/getTypes')
const postPokemons = require('../Handlers/postPokemons')
const deletePokemon = require("../Handlers/deletePokemon")
const multer = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getAllPokemons)

router.get('/name', getPokemonByName)

router.get('/pokemons/:idPokemon', getPokemon)

router.post('/pokemons', upload.single('image'), postPokemons)

router.get('/types', getTypes)

router.delete('/pokemons', deletePokemon)

module.exports = router;
