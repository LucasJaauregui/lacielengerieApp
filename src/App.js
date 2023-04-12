import './App.css';
import  ItemList  from './componentes/ItemList/ItemList';
import { Navbar } from './componentes/Navbar/Navbar';


function App() {
  
  let saludo = "Lucas"
  let edad = "23"
  
  return (
    <div className="App">

      <Navbar />
      <ItemList saludo={saludo} edad={edad} /> 
    </div>
  );
}

export default App;

