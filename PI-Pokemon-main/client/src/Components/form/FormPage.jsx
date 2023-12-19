// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import validate from './validate'
// import './Form.css'
// const FormCreate = ({ newPokemon }) => {
//     const navigate = useNavigate();
//     const types = useSelector((state) => state.pokemonsTypes);
//     const [inputData, setInputData] = useState({
//         name: '',
//         sprite: '',
//         hp: '',
//         atk: '',
//         spAtk: '',
//         def: '',
//         spDef: '',
//         spd: '',
//         height: '',
//         weight: '',
//         types: [],
//     });
//     const [errors, setErrors] = useState({});

//     const handleChange = (event) => {
//         event.preventDefault()
//         const { name, value, type, checked } = event.target;

//         if (type === 'checkbox') {
//             const updatedTypes = checked ? [...inputData.types, value] : inputData.types.filter((type) => type !== value);
//             setInputData({
//                 ...inputData,
//                 types: updatedTypes.slice(0, 2),
//             });
//         } else {
//             setInputData({
//                 ...inputData,
//                 [name]: value,
//             });
//         }
//     };
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const formErrors = validate(inputData);
//         newPokemon(inputData)
//         navigate('/home');
//     };
//     return (
//         <div className="container">
//             <section className="formContainer">
//                 <article className="formArticle">
//                     <h2>Creá tu Pokemon</h2>
//                     <form className="form" onChange={handleChange}>
//                         <label className="formLabel">Name:</label>
//                         <input placeholder='example: aquiles' type="text" value={inputData.name} name='name' id='name' onChange={handleChange} />
//                         {errors.name !== null && <p>{errors.name}</p>}

//                         <label placeholder='example: Luciana' className="formLabel">Image:</label>
//                         <input placeholder='example.png' type="text" value={inputData.sprite} className="formInput" name='sprite' id='sprite' onChange={handleChange} />
//                         {errors.sprite !== null && <p>{errors.sprite}</p>}

//                         <label className="formLabel"> Hp:</label>
//                         <input placeholder='minimun attribute value: 100' type="text" value={inputData.hp} className="formInput" name='hp' id='hp' onChange={handleChange} />
//                         {errors.hp !== null && <p>{errors.hp}</p>}

//                         <label className="formLabel">Attack:</label>
//                         <input placeholder='minimun attribute value: 5' type="text" value={inputData.atk} name='atk' className="formInput" onChange={handleChange} />
//                         {errors.atk !== null && <p>{errors.attack}</p>}

//                         <label className="formLabel">Special Attack:</label>
//                         <input placeholder='minimun attribute value: 5' type="text" value={inputData.spAtk} className="formInput" name='spAtk' onChange={handleChange} />
//                         {errors.spAtk && <p>{errors.spAtk}</p>}

//                         <label className="formLabel">Defense:</label>
//                         <input placeholder='minimun attribute value: 5' type="text" value={inputData.def} className="formInput" name='def' onChange={handleChange} />
//                         {errors.def !== null && <p>{errors.def}</p>}

//                         <label className="formLabel">Special Defense:</label>
//                         <input placeholder='minimun attribute value: 5' type="text" value={inputData.spDef} className="formInput" name='spDef' onChange={handleChange} />
//                         {errors.spDef !== null && <p>{errors.spDef}</p>}

//                         <label className="formLabel">Speed:</label>
//                         <input placeholder='minimun attribute value: 10' type="text" value={inputData.spd} className="formInput" name='spd' onChange={handleChange} />
//                         {errors.spd !== null && <p>{errors.speed}</p>}

//                         <label className="formLabel">Height:</label>
//                         <input placeholder='minimun attribute value: 1' type="text" value={inputData.height} className="formInput" name='height' onChange={handleChange} />
//                         {errors.height !== null && <p>{errors.height}</p>}

//                         <label className="formLabel">Weight:</label>
//                         <input placeholder='minimun attribute value: 1' type="text" value={inputData.weight} className="formInput" name='weight' onChange={handleChange} />
//                         {errors.weight !== null && <p>{errors.weight}</p>}

//                         <span>Types:</span>
//                         {errors.types !== null && <p>{errors.types}</p>}
//                         <div>
//                             {types?.map((type) => (
//                                 <div key={type.name} className="formCheckBoxLabel">
//                                     <input
//                                         className="formCheckbox"
//                                         type="checkbox"
//                                         value={type.name}
//                                         onChange={handleChange}
//                                         checked={inputData.types?.includes(type.name)}
//                                     />
//                                     <label>{type.name}</label>
//                                 </div>
//                             ))}
//                         </div>
//                         <button onClick={handleSubmit}> Create </button>
//                     </form>
//                 </article>
//             </section>
//         </div>
//     );
// };
// export default FormCreate;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postPokemons } from '../redux/actions';

const FormPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [hp, setHp] = useState(0);
  const [atk, setAtk] = useState(0);
  const [def, setDef] = useState(0);
  const [spd, setSpd] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [types, setTypes] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleHpChange = (e) => {
    setHp(e.target.value);
  };

  const handleAtkChange = (e) => {
    setAtk(e.target.value);
  };

  const handleDefChange = (e) => {
    setDef(e.target.value);
  };

  const handleSpdChange = (e) => {
    setSpd(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleTypesChange = (e) => {
    const selectedTypes = Array.from(e.target.selectedOptions, (option) => option.value);
    setTypes(selectedTypes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPokemon = {
      name,
      image,
      hp,
      atk,
      def,
      spd,
      height,
      weight,
      types,
    };

    dispatch(postPokemons(newPokemon));

    // Reset form
    setName('');
    setImage('');
    setHp(0);
    setAtk(0);
    setDef(0);
    setSpd(0);
    setHeight(0);
    setWeight(0);
    setTypes([]);
  };

  return (
    <div>
      <h1>Create a new Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" value={image} onChange={handleImageChange} required />

        <label htmlFor="hp">HP:</label>
        <input type="number" id="hp" value={hp} onChange={handleHpChange} required />

        <label htmlFor="atk">Attack:</label>
        <input type="number" id="atk" value={atk} onChange={handleAtkChange} required />

        <label htmlFor="def">Defense:</label>
        <input type="number" id="def" value={def} onChange={handleDefChange} required />

        <label htmlFor="spd">Speed:</label>
        <input type="number" id="spd" value={spd} onChange={handleSpdChange} required />

        <label htmlFor="height">Height:</label>
        <input type="number" id="height" value={height} onChange={handleHeightChange} required />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" value={weight} onChange={handleWeightChange} required />

        <label htmlFor="types">Types:</label>
        <select multiple id="types" value={types} onChange={handleTypesChange} required>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="grass">Grass</option>
          {/* Add more options for other types */}
        </select>

        <button type="submit">Create Pokemon</button>
      </form>
    </div>
  );
};

export default FormPage;