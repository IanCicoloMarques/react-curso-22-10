import logo from './logo.svg';
import './App.css';
import Topo from './components/Topo';
import Corpo from './components/Corpo/Corpo';
import Rodape from './components/Rodape';

function App() {
  return (
    <div>
      <Topo/>
      <Corpo/>
      <Rodape/>
    </div>
  );
}

export default App;
