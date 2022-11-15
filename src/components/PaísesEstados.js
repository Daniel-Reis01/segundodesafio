import { useEffect, useState} from "react";
import {fetchStates} from '../busca/LocalizacaoApi';


const PaísesEstados = ({onChange = () => {} }) => {
  const [states, setState] = useState([]);
 
    useEffect(()=> {
        fetchStates().then((states) =>{
        setState(states);
        });
      }, []);

    return (
    <select id="países-state" name="países-state" onChange={onChange}>
      <option value="">Selecione um Estado...</option>
      {states.map((state) =>{
        const {sigla, nome} = state
        return( <option key={sigla} value={sigla}>{nome}</option>)
      })}
    </select>
  );
};
export default PaísesEstados;

//hjvd