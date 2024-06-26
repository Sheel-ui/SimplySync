import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Setup from './components/Setup/Setup';
import Navbar from './components/Navbar/Navbar';
import Controls from './components/Controls/Controls';
import ListSearch from './components/ListSearch/ListSearch';
import GridSearch from './components/GridSearch/GridSearch';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
        <Navbar></Navbar>
          <div className="content">
          <Controls />
          <Switch>
            <Route exact path='/'>
              <ListSearch></ListSearch>
            </Route>
            <Route path='/carousel'>
              <Carousel></Carousel>
            </Route>
            <Route path='/grid'>
              <GridSearch></GridSearch>
            </Route>
            <Route path='/landing'>
                <Landing />
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/setup'>
                <Setup />
            </Route>
          </Switch>
          </div>        
        </div>
      </div>
    </Router>
  );
}

export default App;