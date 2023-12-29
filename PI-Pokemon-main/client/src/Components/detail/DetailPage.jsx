// import { Link, useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import Loading from "../loading/Loading";
// import {pokemonByID} from '../../redux/actions'
// import './Detail.css'
// const Detail = ({isLoading, setIsLoading}) =>{
//     const {id} = useParams()
//     const pokemonById = useSelector((state)=> state.pokemonByID )
//     console.log(pokemonById)
//     const dispatch = useDispatch();
//      const typesPokemonId = pokemonById.types ?  pokemonById.types : pokemonById.types = pokemonById.Types
//     const typeElements = typesPokemonId?.map((type) => (
//       <div className="containerImg" key={type.name}>
//         <img className="type.name.toLowerCase()"src={`/assets/icons/${type.name.toLowerCase()}.svg`} alt={type.name} />
//       </div>
//     ));
//     useEffect(() => {
//         setIsLoading(true);
//         const loadingTimer = setTimeout(() => {
//           dispatch(pokemonByID(id))
//             .then(() => {
//               setIsLoading(false);
//             })
//             .catch((error) => {
//               console.error("Error fetching Pokémon:", error);
//               setIsLoading(false);
//             });
//         }, 750);
//         return () => {
//             clearTimeout(loadingTimer);
//           };
// }, [dispatch, id])
//     if (isLoading) {
//         return <Loading />;
//     }
//     console.log(pokemonById.sprites)
//     return (
//       <div className="detail-container">
//         <div className="contentDetail">
//           <div>
//             <img
//             className="imgDetail"
//             src={pokemonById.sprite}
//             alt={pokemonById.name}
//           />
//             </div>
//         <div className="detail-container-stats">
//           <div className="typesContainer">
//           <h2>{pokemonById.name} </h2>
//           <div className="typesContainer">
//             {typeElements}
//             </div>
//             </div>
//             <div>
//               <div>
//             <span>ID:</span> {id}
//           </div>
//           <h3>STATS:</h3>
//           <div className="stats">
//             <span>HP:</span> {pokemonById.hp}
//           </div>
//           <div className="stats">
//             <span>SPD:</span> {pokemonById.spd}
//           </div>
//           <div className="stats">
//             <span>ATK:</span> {pokemonById.atk}
//           </div>
//           <div className="stats">
//             <span>SP.ATK:</span> {pokemonById.spAtk}
//           </div>
//           <div className="stats">
//             <span>DEF:</span> {pokemonById.def}
//           </div>
//           <div className="stats">
//             <span>SP.DEF:</span> {pokemonById.spDef}
//           </div>
//           <div className="stats">
//             <span>Height: {pokemonById.height / 10}m</span>
//           </div>
//           <div className="stats">
//             <span>Weight: {pokemonById.weight / 10}kg</span>
//           </div>
//         </div>
//         </div>
//         <Link to={"/home"} className="backButton">
//           <button className="customButton"></button>
//         </Link>
//       </div>
//       </div>
//     );
// }
// export default Detail

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { pokemonByID } from '../../redux/actions';
import './Detail.css'

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const pokemon = useSelector((state) => state.pokemonByID);

  useEffect(() => {
    dispatch(pokemonByID(id));
  }, [dispatch, id]);

  const handleGoBack = () => {
    // Utiliza el método navigate para volver a la página anterior (en este caso, la home)
    navigate(-1);
  };

  return (
    <div className="detail-page"> {/* Agrega la clase detail-page */}
      {pokemon ? (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprite} alt={pokemon.name} />
          <p>ID: {pokemon.id}</p>
          <p>HP: {pokemon.hp}</p>
          <p>Ataque: {pokemon.atk}</p>
          <p>Defensa: {pokemon.def}</p>
          <p>Velocidad: {pokemon.spd}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <p>Tipo: {pokemon.types && pokemon.types.map((type) => type.name).join(', ')}</p>

        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DetailPage;