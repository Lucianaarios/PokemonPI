import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderFilters from '../filters/OrderFilters';
import { allPokemons, setCurrentPage, pokemonByID, getTypes } from '../../redux/actions';
import SearchBar from '../searchBar/SearchBar';
import NavBar from '../Nav/Nav';
import Pagination from '../pagination/Pagination';
import PokemonDetail from '../detail/PokemonDetail';
import Modal from '../form/Modal';
import './Home.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemons = useSelector((state) => state.allPokemonsCopy);
  const types = useSelector((state) => state.pokemonsTypes);
  const currentPage = useSelector((state) => state.currentPage);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

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
    pokemon && pokemon.name && pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenCreateModal = () => {
    setCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };



  return (
    <div className="home-page">
      <NavBar
        onSearch={handleSearch}
        handleOrderChange={handleOrderChange}
        handleTypeChange={(selectedTypes) => console.log(selectedTypes)}
        handleOpenCreateModal={handleOpenCreateModal}
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
                <p>{pokemon.atk}</p>
                <p className="pokemon-types">
                  {pokemon.types 
                    ? pokemon.types.map((type, index) => (
                      <span key={index}>
                        {type && type.name && (
                          <span className={`type-${String(type.name).toLowerCase()}`}>
                            {type.name} - {type.otraPropiedad}
                          </span>
                        )}
                      </span>
                    ))
                    : 
                    pokemon.Types.map((type, index) => (
                      <span key={index}>
                        {type && type.name && (
                          <span className={`type-${String(type.name).toLowerCase()}`}>
                            {type.name} - {type.otraPropiedad}
                          </span>
                        )}
                      </span>
                    ))}
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

      {isCreateModalOpen && (
        <Modal onClose={handleCloseCreateModal} />
      )}

      <Pagination totalItems={filteredPokemons.length} />
    </div>
  );
};

export default HomePage;