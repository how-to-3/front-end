// REACT
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// COMPONENTS 
import Navigation from './components/Navigation';
import Particles from './components/Particles';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import UpdatePost from './components/UpdatePost';
import Feed from './components/Feed';
import HowToDetails from './components/HowToDetails';
import DashCard from './components/DashCard';
// LAYOUY FOR ROUTES EXAMPLE


function App() {
  return (
    <div className="main-container" style={{padding:"0 0 20% 0", backgroundColor:"#3e444a"}}>
      <Navigation />
      
        {/* SWITCH + ROUTES HERE */}

      <Switch>
              <Route exact path="/" component={Feed}/>
              <Route path="/login" component={Login}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route exact path ="/Guides/:id" component = {DashCard}/>
      </Switch> 
      <Particles />

        {/* PARTICLES ANIMATION BELOW */}
    </div>
  );
}

export default App;
