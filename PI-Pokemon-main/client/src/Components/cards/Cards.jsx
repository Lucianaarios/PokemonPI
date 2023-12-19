// import React, { useState } from 'react';
// import Card from '../card/Card';
// import Loading from '../loading/Loading';
// import Pagination from '../pagination/Pagination';
// import { useSelector } from 'react-redux';
// import './Cards.css'
// const Cards = ({ isLoading, pokemons }) => {
//   const currentPage = useSelector(state => state.currentPage)
//   const itemsPerPage = 12;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const displayedPokemons = Array.isArray(pokemons)
//     ? pokemons.slice(startIndex, endIndex)
//     : [pokemons];
    
//   return (
//     <div className="container-Cards">
//       {isLoading ? (

//         <Loading />
//       ) : (
//         <>
//           <div className="cards">
//             {displayedPokemons.map(({ id, name, sprite, types, Types }, index) => (
//               <div key={index} className="card">
//                 <Card id={id} name={name} sprite={sprite} types={types ? types : Types} />
//               </div>
//             ))}
//           </div>
//           <div className="pagination">
//           <Pagination
//             currentPage={currentPage}
//             totalItems={Array.isArray(pokemons) ? pokemons.length : 1}
//           />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
// export default Cards;