import { useEffect, useState } from "react";
import { fetchCitiesForState } from '../busca/LocalizacaoApi';


const EstadoCidade = ({state, onChange = () => {}}) => {
  const [cities, setCities] = useState([]);
 
    useEffect(()=> {
      
        fetchCitiesForState('BA').then((cities)=> {
        setCities(cities);
        });
      }, [state]);
console.log(cities);
  return (
    <select id="estados" name="" onChange={onChange}>
      <option value="">Selecione estado e cidade...</option>
      {cities.map((city) => {
        const {id, nome} = city
        return( <option key={id} value={id}>{nome}</option>);
        
          })}
         
        </select>
     
  );
};

export default EstadoCidade;
//esta parcialmente funcional 