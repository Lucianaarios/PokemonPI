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
    console.log(formErrors)

    try {
      console.log('Submitting data:', inputData);
      console.log('Se esta creando el pokemon')
      console.log(Object.keys(formErrors).length)

      if (formErrors.hayErrores) {
        // Aquí debes esperar a que la acción asíncrona se complete antes de continuar
        const response = await dispatch(addPokemon(inputData));
        console.log('Response from backend:', response);
        navigate('/home');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
    }
  };

  return (
    <div className="container">
      <section className="formContainer">
        <article className="formArticle">
          <h2>Creá tu Pokemon</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label className="formLabel">Nombre:</label>
            <input
              placeholder="ejemplo: Luciana"
              type="text"
              value={inputData.name}
              name="name"
              id="name"
              onChange={handleChange}
            />
            {errors.name !== null && <p>{errors.name}</p>}
            <label className="formLabel">Imagen:</label>
            <input
              type="text"
              placeholder="Ingrese la URL de la imagen"
              value={inputData.sprite}
              name="sprite"
              onChange={handleChange}
            />
            {errors.sprite !== null && <p>{errors.sprite}</p>}
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
            {errors.hp !== null && <p>{errors.hp}</p>}
            <label className="formLabel">Ataque:</label>
            <input
              placeholder="valor mínimo del atributo: 5"
              type="text"
              value={inputData.atk}
              name="atk"
              className="formInput"
              onChange={handleChange}
            />
            {errors.atk !== null && <p>{errors.atk}</p>}
            <label className="formLabel">Ataque Especial:</label>
            <input
              placeholder="valor mínimo del atributo: 5"
              type="text"
              value={inputData.spAtk}
              className="formInput"
              name="spAtk"
              onChange={handleChange}
            />
            {errors.spAtk && <p>{errors.spAtk}</p>}
            <label className="formLabel">Defensa:</label>
            <input
              placeholder="valor mínimo del atributo: 5"
              type="text"
              value={inputData.def}
              className="formInput"
              name="def"
              onChange={handleChange}
            />
            {errors.def !== null && <p>{errors.def}</p>}
            <label className="formLabel">Defensa Especial:</label>
            <input
              placeholder="valor mínimo del atributo: 5"
              type="text"
              value={inputData.spDef}
              className="formInput"
              name="spDef"
              onChange={handleChange}
            />
            {errors.spDef !== null && <p>{errors.spDef}</p>}
            <label className="formLabel">Velocidad:</label>
            <input
              placeholder="valor mínimo del atributo: 10"
              type="text"
              value={inputData.spd}
              className="formInput"
              name="spd"
              onChange={handleChange}
            />
            {errors.spd !== null && <p>{errors.spd}</p>}
            <label className="formLabel">Altura:</label>
            <input
              placeholder="valor mínimo del atributo: 1"
              type="text"
              value={inputData.height}
              className="formInput"
              name="height"
              onChange={handleChange}
            />
            {errors.height !== null && <p>{errors.height}</p>}
            <label className="formLabel">Peso:</label>
            <input
              placeholder="valor mínimo del atributo: 1"
              type="text"
              value={inputData.weight}
              className="formInput"
              name="weight"
              onChange={handleChange}
            />
            {errors.weight !== null && <p>{errors.weight}</p>}
            <label className="formLabel">Tipos:</label>
            {errors.types !== null && <p>{errors.types}</p>}
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