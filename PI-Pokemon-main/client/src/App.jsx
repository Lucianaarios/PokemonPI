import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './Components/landing/LandingPage';
//import Form from './Components/form/FormPage'
//import Cards from './Components/cards/Cards';
//import Nav from './Components/Nav/Nav';
//import Detail from './Components/detail/DetailPage';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, allPokemons, getPokemonByName } from './redux/actions';
import axios from 'axios';
import HomePage from './Components/Home/HomePage';
import DetailPage from './Components/detail/DetailPage';

function App() {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const [isLoading, setIsLoading] = useState(true);
//   let pokemons = useSelector((state) => state.allPokemonsCopy);
//   const id = location.pathname.split("/").at(-1);

//   const onSearch = (name) => {
//     dispatch(getPokemonByName(name));
//   };

//   const newPokemon = async (pokemon) => {
//     const url = 'http://localhost:3001/pokemons';
//     try {
//       const response = await axios.post(url, pokemon);
//       console.log(response);
//       if (response.status === 200) {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       if (error.response.status === 404) {
//         alert(error.response.data);
//       }
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         await dispatch(getTypes());
//         await dispatch(allPokemons());
//         setIsLoading(false);
//       } catch (error) {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, [dispatch]);


  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
    
  );
}


export default App;