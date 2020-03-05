// REACT
import React, { createContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// COMPONENTS 
import Navigation from './components/Navigation';
import Particles from './components/Particles';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Feed from './components/Feed';
import PrivateRoute from './components/PrivateRoute';
import DashCard from './components/DashCard';

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export const NameContext = createContext();


const App = () => {
  
  const initialState = {
    guide_name:"", 
    category:"", 
    description:"", 
    score:""
  }

  const [howTos, setHowTos] = useState([])
  const [newHowTo, setNewHowTo] = useState(initialState)
  const [howToCard, setHowToCard] = useState({guide_name:"",category:"",description:"", score:""})

  const resetCard = () => {
    setHowTos(initialState)
  }

  return (
  <>
    <NameContext.Provider value={{resetCard, howTos, setHowTos, newHowTo, setNewHowTo, howToCard, setHowToCard,}}>
      <div className="main-container" style={{padding:"0 0 20% 0", backgroundColor:"#3e444a"}}>
        <Navigation />

        <Switch>
                <Route exact path="/" component={Feed}/>
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
                <PrivateRoute path ="/Guides/:id" component={DashCard} />
        </Switch> 
        <Particles />
      </div>
    </NameContext.Provider>
  </>
  );
}



export default App;
