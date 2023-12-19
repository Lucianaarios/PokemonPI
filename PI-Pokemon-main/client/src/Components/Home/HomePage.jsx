import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OrderFilters from '../filters/OrderFilters';
import { allPokemons, setCurrentPage } from '../../redux/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemons = useSelector((state) => state.allPokemonsCopy);
  const types = useSelector((state) => state.pokemonsTypes);
  const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(allPokemons());
  }, [dispatch]);

  const handleCardClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleOrderChange = (value) => {
    dispatch(setCurrentPage(1));
  };

  return (
    <div>
      <input type="text" placeholder="Buscar por nombre" />
      <div>
        <OrderFilters handleOrderChange={handleOrderChange} types={types} />
      </div>
      <div>
        {pokemons &&
          pokemons.length > 0 &&
          pokemons
            .slice((currentPage - 1) * 12, currentPage * 12)
            .map((pokemon) => (
              <div key={pokemon.id} onClick={() => handleCardClick(pokemon.id)}>
                <img src={pokemon.sprite} alt={pokemon.name} />
                <h4>{pokemon.name}</h4>
                <p>{pokemon.types.join(', ')}</p>
              </div>
            ))}
      </div>
      <div>
        <button>Anterior</button>
        <button>Siguiente</button>
      </div>
    </div>
  );
};

export default HomePage;