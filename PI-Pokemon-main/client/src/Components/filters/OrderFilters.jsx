// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { filterByType, filter, orderAlf, orderAtk, setCurrentPage } from "../../redux/actions";
// import './Filters.css';

// const Filters = () => {
//   const types = useSelector((state) => state.pokemonsTypes);
//   const dispatch = useDispatch();
  
//   const handleFiltersTypes = (event) => {
//     dispatch(filterByType(event.target.value));
//     dispatch(setCurrentPage(1))
//   };
//   const handleFilters = (event) => {
//     dispatch(filter(event.target.value));
//     dispatch(setCurrentPage(1))
//   };
//   const handleOrder = (event) => {
//     if(event.target.value === "AtkAscendente" || event.target.value === "AtkDescendente"){
//       dispatch(orderAtk(event.target.value));
//       dispatch(setCurrentPage(1))
//     }else{
//       dispatch(orderAlf(event.target.value));
//       dispatch(setCurrentPage(1))
//     }
//   };
//   return (
//     <div>
//       <div className="filter-container">
//        const types = useSelector((state) => state.pokemonsTypes);
//   const dispatch = useDispatch();
  
//   const handleFiltersTypes = (event) => {
//     dispatch(filterByType(event.target.value));
//     dispatch(setCurrentPage(1))
//   };
//       <select onChange={handleFilters}>
//         <option value="All" hidden>Storage</option>
//         <option value="AllPokemons">All Pokemons</option>
//         <option value="false">Exist</option>
//         <option value="true">Create</option>
//       </select>

//       <select onChange={handleOrder}>
//         <option value="All" hidden>Orden</option>
//         <option value="Ascendente">A-Z</option>
//         <option value="Descendente">Z-A</option>
//         <option value="AtkAscendente">Atk↑</option>
//         <option value="AtkDescendente">Atk↓</option>
//       </select>
//     </div>
//     </div>
//   );
// };
// export default Filters;`
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByType, filter, orderAlf, orderAtk, setCurrentPage } from "../../redux/actions";
import './Filters.css'

const OrderFilters = () => {
  const types = useSelector((state) => state.pokemonsTypes);
  const dispatch = useDispatch();
  
  const handleFiltersTypes = (event) => {
    dispatch(filterByType(event.target.value));
    dispatch(setCurrentPage(1));
  };

  const handleFilters = (event) => {
    dispatch(filter(event.target.value));
    dispatch(setCurrentPage(1));
  };

  const handleOrder = (event) => {
    if (event.target.value === "AtkAscendente" || event.target.value === "AtkDescendente") {
      dispatch(orderAtk(event.target.value));
    } else {
      dispatch(orderAlf(event.target.value));
    }
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="filter-container">
      <select onChange={handleFiltersTypes}>
        <option value="All" hidden>Types</option>
        <option value="All">All</option>
        {types &&
          types.map((type) => (
            <option key={type.id} value={type.name}>
              {type.name.toUpperCase()}
            </option>
          ))}
      </select>

      <select onChange={handleFilters}>
        <option value="All" hidden>Storage</option>
        <option value="AllPokemons">All Pokemons</option>
        <option value="false">Exist</option>
        <option value="true">Create</option>
      </select>

      <select onChange={handleOrder}>
        <option value="All" hidden>Orden</option>
        <option value="Ascendente">A-Z</option>
        <option value="Descendente">Z-A</option>
        <option value="AtkAscendente">Atk↑</option>
        <option value="AtkDescendente">Atk↓</option>
      </select>
    </div>
  );
};

export default OrderFilters;