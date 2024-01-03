import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './Components/landing/LandingPage';
import axios from 'axios';
import HomePage from './Components/Home/HomePage';
import FormCreate from './Components/form/FormCreate';
import PokemonDetail from './Components/detail/PokemonDetail';

function App() {



  return (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/detail/:id' element={<PokemonDetail />} />
        <Route path="/create" element={<FormCreate />} />
      </Routes>
    
  );
}


export default App;