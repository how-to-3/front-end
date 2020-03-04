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
import PrivateRoute from './components/PrivateRoute';
import { UserContext } from './components/UserContext';
import DashCard from './components/DashCard';


// LAYOUY FOR ROUTES EXAMPLE




const App = () => {


  return (
    <UserContext.Provider value="">
      <div className="main-container" style={{padding:"0 0 20% 0", backgroundColor:"#3e444a"}}>
        <Navigation />
        
          {/* SWITCH + ROUTES HERE */}

        <Switch>
                <Route exact path="/" component={Feed}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path ="/Guides/:id" component={DashCard} />
        </Switch> 
        <Particles />
        {/* PARTICLES ANIMATION BELOW */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
