import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPokemon, getTypes } from '../../redux/actions';
import validate from './validate';
import { Link } from 'react-router-dom';
import './Form.css';

const FormCreate = () => {
  const navigate = useNavigate();
  const types = useSelector((state) => state.pokemonsTypes);
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    name: '',
    sprite: '', 
    hp: '',
    atk: '',
    spAtk: '',
    def: '',
    spDef: '',
    spd: '',
    height: '',
    weight: '',
    types: [],
    
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleTypeSelect = (selectedType) => {
    setInputData((prevInputData) => {
      const isSelected = prevInputData.types.includes(selectedType);
      if (isSelected) {
        const updatedTypes = prevInputData.types.filter((type) => type !== selectedType);
        return {
          ...prevInputData,
          types: updatedTypes,
        };
      } else {
        return {
          ...prevInputData,
          types: [...prevInputData.types, selectedType],
        };
      }
    });
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      const selectedType = value;
      handleTypeSelect(selectedType);
    } else {
      setInputData((prevInputData) => ({
        ...prevInputData,
        [name]: value,
      }));
    }
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formErrors = validate(inputData);
    setErrors(formErrors);
  
    try {
      console.log('Submitting data:', inputData);
      console.log('Se esta creando el pokemon');
      console.log(Object.keys(formErrors).length);
  
      const response = await dispatch(addPokemon(inputData));
      console.log('Response from backend:', response);
  
      if (response.status === 200) {
        console.log('Success status is true');
        setSuccessMessage('El Pokémon se ha creado con éxito');
        setInputData({
          name: '',
          sprite: '',
          hp: '',
          atk: '',
          spAtk: '',
          def: '',
          spDef: '',
          spd: '',
          height: '',
          weight: '',
          types: [],
        });
        setErrors({});
        navigate('/home');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setErrors(prevErrors => ({ ...prevErrors, types: error.message }));
    }
  };
  
  useEffect(() => {
    return () => {
      setSuccessMessage(null);
    };
  }, []);


  return (
    <div className="container">
      <section className="formContainer">
        <article className="formArticle">
          <h2>Creá tu Pokemon</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label className="formLabel">Nombre:</label>
            <input
              placeholder="ejemplo: luciana"
              type="text"
              value={inputData.name}
              name="name"
              id="name"
              onChange={handleChange}
            />
            {errors.name !== null && <p className="error-message">{errors.name}</p>}
            <label className="formLabel">Imagen:</label>
            <input
              type="text"
              placeholder="Ingrese la URL de la imagen"
              value={inputData.sprite}
              name="sprite"
              onChange={handleChange}
            />
            {errors.sprite !== null && <p className="error-message">{errors.sprite}</p>}
            <label className="formLabel">Hp:</label>
            <input
              placeholder="valor mínimo del atributo: 100"
              type="text"
              value={inputData.hp}
              className="formInput"
              name="hp"
              id="hp"
              onChange={handleChange}
            />
            {errors.hp !== null && <p className="error-message">{errors.hp}</p>}
            <label className="formLabel">Ataque:</label>
            <input
              placeholder="valor mínimo del atributo: 5"
              type="text"
              value={inputData.atk}
              name="atk"
              className="formInput"
              onChange={handleChange}
            />
            {errors.atk !== null && <p className="error-message">{errors.atk}</p>}
            <label className="formLabel">Ataque Especial:</label>
            <input
              placeholder="valor mínimo del atributo: 5"
              type="text"
              value={inputData.spAtk}
              className="formInput"
              name="spAtk"
              onChange={handleChange}
            />
            {errors.spAtk && <p className="error-message">{errors.spAtk}</p>}
            <label className="formLabel">Defensa:</label>
            <input
              placeholder="valor mínimo del atributo: 5"
              type="text"
              value={inputData.def}
              className="formInput"
              name="def"
              onChange={handleChange}
            />
            {errors.def !== null && <p className="error-message">{errors.def}</p>}
            <label className="formLabel">Defensa Especial:</label>
            <input
              placeholder="valor mínimo del atributo: 5"
              type="text"
              value={inputData.spDef}
              className="formInput"
              name="spDef"
              onChange={handleChange}
            />
            {errors.spDef !== null && <p className="error-message">{errors.spDef}</p>}
            <label className="formLabel">Velocidad:</label>
            <input
              placeholder="valor mínimo del atributo: 10"
              type="text"
              value={inputData.spd}
              className="formInput"
              name="spd"
              onChange={handleChange}
            />
            {errors.spd !== null && <p className="error-message">{errors.spd}</p>}
            <label className="formLabel">Altura:</label>
            <input
              placeholder="valor mínimo del atributo: 1"
              type="text"
              value={inputData.height}
              className="formInput"
              name="height"
              onChange={handleChange}
            />
            {errors.height !== null && <p className="error-message">{errors.height}</p>}
            <label className="formLabel">Peso:</label>
            <input
              placeholder="valor mínimo del atributo: 1"
              type="text"
              value={inputData.weight}
              className="formInput"
              name="weight"
              onChange={handleChange}
            />
            {errors.weight !== null && <p className="error-message">{errors.weight}</p>}
            <label className="formLabel">Tipos:</label>
            {errors.types !== null && <p className="error-message">{errors.types}</p>}
            <div className="typesContainer">
              {types && types.length > 0 &&
                types.map((type) => (
                  <div key={type.name} className="formCheckboxLabel">
                    <input
                      className="formCheckbox"
                      type="checkbox"
                      value={type.name}
                      onChange={handleChange}
                      checked={inputData.types?.includes(type.name)}
                    />
                    <label>{type.name}</label>
                  </div>
                ))}
            </div>
            {successMessage && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <p>{successMessage}</p>
                  <button onClick={() => setSuccessMessage(null)}>Cerrar</button>
                </div>
              </div>
            )}
            <button type="submit">Crear</button>
          </form>
          <p>
            <Link to="/home" className="home">Volver a la página de inicio</Link>
          </p>
        </article>
      </section>
    </div>
  );
};

export default FormCreate;