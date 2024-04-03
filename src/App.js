import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Setup from './components/Setup/Setup';

function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route exact path='/'>
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
    </Router>
  );
}

export default App;
