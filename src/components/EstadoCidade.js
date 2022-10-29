import { useEffect, useState} from "react";
import {fetchStates} from '../busca/LocalizacaoApi';


const EstadoCidade = () => {
  const [states, setState] = useState([]);
 
    useEffect(()=>{
        fetchStates().then((states) =>{
        setState(states);
        });
      }, []);


  return (
    <select id="estados">
      <option value="">Selecione estado e cidade...</option>
      {states.map((state) =>{
        const {name} = state
        return( <option key={name} value={name}>{name}</option>)
          })}
        </select>
  );
};

export default EstadoCidade;
