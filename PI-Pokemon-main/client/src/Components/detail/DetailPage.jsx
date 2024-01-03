

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
  console.log(pokemon)

  useEffect(() => {
    dispatch(pokemonByID(id));
  }, [dispatch, id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="detail-page">
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
          <p>Tipo: {pokemon.types?  pokemon.types.map((type) => type.name).join(', '):  pokemon.Types.map((type) => type.name).join(', ') }</p>


        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DetailPage;