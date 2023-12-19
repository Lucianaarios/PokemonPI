// import { Link } from "react-router-dom";
// import axios from 'axios';
// import './Card.css';

// const Card = ({ id, name, sprite, types }) => {
//   const typeElements =  types?.map((type) => (
//     <div key={type.name} className="type">
//       <img src={`/assets/icons/${type.name.toLowerCase()}.svg`} alt={type.name} />
//     </div>
//   ));
//   const handleImgError = (event) =>{
//     event.target.src = 'https://m.media-amazon.com/images/I/71WkWKFRSWL.png';
//   }
//   const deletePokemon = async(id) =>{
//     try {
//       const data = {id: String(id)};
//       console.log(data);
//       const deletedPokemon = (await axios.delete(`http://localhost:3001/pokemons`,{data})).data;
//       if(deletedPokemon.status){
//         alert('se elimino');
//       }else{
//         alert(deletedPokemon.message);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
//   return (
//     <div className="card-container">
//     {id.length > 3 && (
//       <div onClick={() => deletePokemon(id)} className="btnX">
//         x
//       </div>
//     )}
//     <Link to={`/detail/${id}`}>
//       <div className="card-content">
//         <div className="containerImgPokemon">
//           <img className="imgPokemon" onError={handleImgError} src={`${sprite}`} alt={`${name} sprite`} />
//         </div>
//         <h2 className="namePokemon">{name}</h2>
//         <div className="imgTypes">
//           <p>{typeElements}</p>
//         </div>
//         <div className="collection-message">
//           <p>Esta coleccion de cartas son tipo unicas</p>
//         </div>
//       </div>
//     </Link>
//   </div>
//   );
// };
// export default Card;