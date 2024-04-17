import './App.css';
import Navbar from './components/Navbar/Navbar';
import Controls from './components/Controls/Controls';
import ListSearch from './components/ListSearch/ListSearch';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Navbar></Navbar>
          <div className="content">
              <Controls />
              <ListSearch />
          </div>
      </div>
    </div>
  );
}

export default App;
