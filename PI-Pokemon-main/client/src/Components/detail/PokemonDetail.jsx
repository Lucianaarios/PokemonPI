import React from 'react';
import DetailPage from './DetailPage';
import './Detail.css';
import logo from '../../assets/imgPokemon.png'

const PokemonDetail = ({ pokemon, onClose }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="pokemon-detail-overlay">
      <div className="pokemon-detail-container">

        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprite} alt={pokemon.name} />
        <button className="butonDetail" onClick={onClose}>Cerrar</button>

        <div className="detail-modal">
          <DetailPage />
        </div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logoDetail" />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;