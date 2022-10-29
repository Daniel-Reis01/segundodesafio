import "./App.css";
import Cidade from "./components/Cidade";
import EstadoCidade from "./components/EstadoCidade";
import PaísesEstados from "./components/PaísesEstados";


function App() {
  return (
    <div className="container">
      <form>
      <label htmlFor="países">Estados</label>
       <PaísesEstados></PaísesEstados>
        <label htmlFor="estados">Estados e cidades</label>
        <EstadoCidade></EstadoCidade>
        <label htmlFor="cidades">Selecione uma cidade</label>
        <Cidade></Cidade>
      </form>
    </div>
  );
}

export default App;
