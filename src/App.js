// REACT
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// COMPONENTS 
import Navigation from './components/Navigation';
import Particles from './components/Particles';
import CreatorForm from './components/CreatorForm';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import UpdatePost from './components/UpdatePost';


// LAYOUY FOR ROUTES EXAMPLE
{
  /* <Switch>
      <Route path={} component={}/>
      <Route path={} component={}/>
      <Route path={} component={}/>
    </Switch> 
  */}


function App() {
  return (
    <div className="main-container" style={{}}>
      <Navigation />
        <div className="body-container" style={{backgroundColor:"#3e444a"}}>
          
        {/* SWITCH + ROUTES HERE */}

        <Particles/>
        </div>
    </div>
  );
}

export default App;
