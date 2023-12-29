// import { Link,  useLocation } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";
// import Filters from '../filters/Filters'
// import './Nav.css'

// const Nav = ({ onSearch }) => {
//   const location = useLocation();

//   return (
//     <div className="nav-container">
//       <div className="nav-links">
//         <Link to="/home" className="btnHome"></Link>
//         <SearchBar onSearch={onSearch} />
//         <Link to="/form" className="btnCrear"></Link>
//         {location.pathname === '/home' && <Filters/>}
//         <Link to="/" className="btnLanding"></Link>
//       </div>
//     </div>
//   );
// }
// export default Nav;


import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import OrderFilters from '../filters/OrderFilters';
import { Link } from 'react-router-dom';
import './Nav.css'
import Logo from '../../assets/imgPokemon.png'

const NavBar = ({ onSearch, handleOrderChange, handleTypeChange }) => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="logo" /> 
      <SearchBar onSearch={onSearch} />
      <OrderFilters handleOrderChange={handleOrderChange} />
      <Link to="/create">Crear nuevo Pokemon</Link>
    </div>
  );
};

export default NavBar;
