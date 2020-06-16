import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to the friends app</h1>
        <p>Please sign in to see your friends... if you have any</p>
        <ul>

          <li>
            <Link to='/'>Home</Link>
          </li>

          <li><Link to='/dashboard'>Dashboard</Link>
          </li>
        
        </ul>
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>

          <Route path='/' component={Login}/>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
