import { useEffect, useState} from "react";
import {fetchCitiesForState} from '../busca/LocalizacaoApi';


const EstadoCidade = ({state, onChange = () => {}}) => {
  const [cities, setCities] = useState([]);
 
    useEffect(()=>{
        fetchCitiesForState(state).then((cities) =>{
        setCities(cities);
        });
      }, [state]);


  return (
    <select id="city" name="city" onChange={onChange}>
      <option value="">Selecione estado e cidade...</option>
      {cities.map((city) =>{
        const {id, name} = city
        return( <option key={id} value={name}>{name}</option>)
          })}
        </select>
  );
};

export default EstadoCidade;
