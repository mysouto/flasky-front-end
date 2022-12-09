import './App.css';
import Navbar from './components/Navbar';
import BikeList from './components/BikeList.js';

function App() {
  return (
    <div>
        <Navbar/>
        <BikeList/>
        <button>Add Bike</button>
    </div>
  );
}

export default App;
