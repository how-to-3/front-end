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
import LoginColapse from './components/LoginColapse';
import RegisterColapse from './components/RegisterColapse';

// LAYOUY FOR ROUTES EXAMPLE


function App() {
  return (
    <div className="main-container" style={{}}>
      <Navigation />

      <LoginColapse />
      <RegisterColapse />
      
        <Particles/>
        
        {/* SWITCH + ROUTES HERE */}

        {
          /* <Switch>
              <Route path={} component={}/>
              <Route path={} component={}/>
              <Route path={} component={}/>
            </Switch> 
        */
        }

        {/* PARTICLES ANIMATION BELOW */}
    </div>
  );
}

export default App;
