import { useEffect, useState} from "react";
import {fetchCitiesForState} from '../busca/LocalizacaoApi';


const EstadoCidade = () => {
  const [cities, setCities] = useState([]);
 
    useEffect(()=>{
        fetchCitiesForState('MG').then((cities) =>{
        setCities(cities);
        });
      }, []);


  return (
    <select id="estados">
      <option value="">Selecione estado e cidade...</option>
      {cities.map((city) =>{
        const {id, name} = city
        return( <option key={id} value={id}>{name}</option>)
          })}
        </select>
  );
};

export default EstadoCidade;
