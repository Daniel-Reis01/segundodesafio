import "./App.css";
import Cidade from "./components/Cidade";
import EstadoCidade from "./components/EstadoCidade";
import PaísesMundo from "./components/PaísesMundo";

function App() {
  return (
    <div className="container">
      <form>
      <label htmlFor="países">País</label>
       <PaísesMundo></PaísesMundo>
        <label htmlFor="estados">Estados e cidades</label>
        <EstadoCidade></EstadoCidade>
        <label htmlFor="cidades">Selecione uma cidade</label>
        <Cidade></Cidade>
      </form>
    </div>
  );
}

export default App;
