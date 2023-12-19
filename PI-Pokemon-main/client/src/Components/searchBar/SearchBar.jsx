// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './SearchBar.css'

// const SearchBar = ({ onSearch }) => {
//   const navigate = useNavigate();
//   const [value, setValue] = useState('');
//   const onChange = (event) => {
//     setValue(event.target.value);
//   };
//   const handleSearch = () => {
//     if(value){
//       onSearch(value);
//       navigate('/home')
//     }else{
//       alert("you have to write a name")
//     }
//   };
//     return (
//       <div className="search-container">
//         <input
//           onChange={onChange}
//           value={value}
//           type="search"
//           placeholder="Search pokemon"
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//     );
// };
// export default SearchBar;
