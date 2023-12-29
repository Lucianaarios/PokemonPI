import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderFilters from '../filters/OrderFilters';
import { allPokemons, setCurrentPage, pokemonByID, getTypes } from '../../redux/actions';
import SearchBar from '../searchBar/SearchBar';
import NavBar from '../Nav/Nav';
import Pagination from '../pagination/Pagination';
import PokemonDetail from '../detail/PokemonDetail';
import './Home.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemons = useSelector((state) => state.allPokemonsCopy);
  const types = useSelector((state) => state.pokemonsTypes);
  const currentPage = useSelector((state) => state.currentPage);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  useEffect(() => {
    console.log('currentPage:', currentPage);
    dispatch(allPokemons());
  }, [dispatch]);

  const handleCardClick = (id) => {
    dispatch(pokemonByID(id)).then((pokemon) => {
      setSelectedPokemon(pokemon);
    });
  };

  const handleOrderChange = (value) => {
    dispatch(setCurrentPage(1));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleClosePokemon = () => {
    setSearchTerm('');
    setSelectedPokemon(null);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <div className="home-page">
      <NavBar
        onSearch={handleSearch}
        handleOrderChange={handleOrderChange}
        handleTypeChange={(selectedTypes) => console.log(selectedTypes)}
      />
      {searchTerm && (
        <div className="search-results">
          <button onClick={handleClosePokemon}>Cerrar Pokemon</button>
        </div>
      )}

      <div className="pokemon-list">
        {filteredPokemons &&
          filteredPokemons.length > 0 &&
          filteredPokemons
            .slice((currentPage - 1) * 12, currentPage * 12)
            .map((pokemon) => (
              <div
                key={pokemon.id}
                className="pokemon-card"
                onClick={() => handleCardClick(pokemon.id)}
              >
                <img src={pokemon.sprite} alt={pokemon.name} className="pokemon-image" />
                <h4 className="pokemon-name">{pokemon.name}</h4>
                <p className="pokemon-types">
                  {pokemon.types && pokemon.types.length > 0
                    ? pokemon.types.map((type, index) => (
                      <span key={index} className={`type-${String(type.name).toLowerCase()}`}>
                        {type.name} - {type.otraPropiedad}
                      </span>
                    ))
                    : 'No types'}
                </p>
              </div>
            ))}
      </div>

      {selectedPokemon && (
        <PokemonDetail
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}

      <Pagination totalItems={filteredPokemons.length} />
    </div>
  );
};

export default HomePage;