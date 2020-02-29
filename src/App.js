import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Particles from './components/Particles';


function App() {
  return (
    <div className="main-container" style={{}}>
      <Navigation />
      <div className="body-container" style={{backgroundColor:"#3e444a"}}>
        <Particles />
      </div>
    </div>
  );
}

export default App;
