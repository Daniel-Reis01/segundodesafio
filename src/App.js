import "./App.css";
import Cidade from "./components/Cidade";
import EstadoCidade from "./components/EstadoCidade";
import PaísesEstados from "./components/PaísesEstados";
import {useState} from 'react';


function App() {

  const [formValues, setFormValues] = useState({ });

  const handleInputChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;
    setFormValues({...formValues, [name]:value });
  }
console.log(formValues)

  return (
    <div className="container">
      <form>
      <label htmlFor="países">Estados</label>
       <PaísesEstados onChange={handleInputChange}/>
        <label htmlFor="estados">Estados e cidades</label>
        <EstadoCidade state={formValues.state} onChange={handleInputChange} />
      
      </form>
    </div>
  );
}

export default App;
