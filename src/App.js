import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Imagelinkform from './components/imagelinkform/imagelinkform';
import Rank from './components/Rank/rank';
import Particles from 'react-particles-js';
import './App.css';


const particlesoptions = {
  particles: {
    number: {
      value:110,
      density: {
        enable: true,
        value_area: 750,
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className='particles'
        params={particlesoptions} />
        <Navigation />
        <Logo />
        <Rank />
        <Imagelinkform />
         {/*<facerecognition /> */ }
      </div>
    ); 
  }
}


export default App;
