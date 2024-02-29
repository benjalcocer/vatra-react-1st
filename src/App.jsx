import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer Texto='Vatra-React'/>
    </>
  );
}

export default App;
