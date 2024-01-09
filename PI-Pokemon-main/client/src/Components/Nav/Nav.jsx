import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import OrderFilters from '../filters/OrderFilters';
import './Nav.css'
import Logo from '../../assets/imgPokemon.png'

const NavBar = ({ onSearch, handleOrderChange, handleTypeChange,handleOpenCreateModal }) => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="logo" /> 
      <SearchBar onSearch={onSearch} />
      <OrderFilters handleOrderChange={handleOrderChange} />
      <button className="buttonCreate" onClick={handleOpenCreateModal}>Crear Nuevo Pokemon</button>
    </div>
  );
};

export default NavBar;
