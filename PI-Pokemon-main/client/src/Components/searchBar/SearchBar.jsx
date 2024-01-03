import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    if (value.trim()) {
      onSearch(value.trim());
       navigate('/home');
    } else {
      alert('Debes escribir un nombre');
    }
  };

  // manejar la búsqueda al presionar Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        onChange={onChange}
        onKeyPress={handleKeyPress}
        value={value}
        type="search"
        placeholder="Search pokemon"
      />
      <button className="buttonSearch" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;