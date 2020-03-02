import React from 'react';
import Particles from 'react-particles-js';

const particleOpt = {
    particles: {
        number: {
            value: 425,
            density: {
            enable: true,
            value_area: 10000
            }
        }
    }
}

const ParticlesAnimation = () => {
    return (
        <div className="body-container" style={{width:"100%", height:"100%", display:"absolute", backgroundColor:"#3e444a"}}>
            <Particles params={particleOpt}/>
        </div>
)}

export default ParticlesAnimation;