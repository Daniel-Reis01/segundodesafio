import "./App.css";
import Cidade from "./components/Cidade";
import EstadoCidade from "./components/EstadoCidade";
import PaísesEstados from "./components/PaísesEstados";


function App() {

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    const{value, name} = e.target;
    setFormValues({})
  }
  return (
    <div className="container">
      <form>
      <label htmlFor="países">Estados</label>
       <PaísesEstados onChange={handleInputChange}/>
        <label htmlFor="estados">Estados e cidades</label>
        <EstadoCidade/>
        <label htmlFor="cidades">Selecione uma cidade</label>
        <Cidade></Cidade>
      </form>
    </div>
  );
}

export default App;
