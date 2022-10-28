import { useEffect, useState} from "react";
 import {fetchStates} from '../busca/LocalizacaoApi';


const PaísesMundo = () => {
  const [states, setState] = useState([]);
 
    useEffect(()=>{
        fetchStates().then((states) =>{
        setState(states);
        });
      }, []);
    
    return (
    <select id="países">
      <option value="">Selecione um País...</option>
      {states.map((state) =>{
        const {country_code} = state
        return( <option key={country_code} value={country_code}>{country_code}</option>)
      })}
    </select>
  );
};
export default PaísesMundo;
