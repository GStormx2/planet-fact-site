import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import data from './components/Source';
import Content from './components/Content'

function App() {
  const planets = data.map(val => val.name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState('Earth');
  const [selectedMenu, setSelectedMenu] = useState('overview');

  return (
    <div>
      <TopBar 
        setIsMenuOpen={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
        selectedPlanet={selectedPlanet}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}/>
      <NavBar 
        planets={planets} 
        isMenuOpen={isMenuOpen} 
        setSelectedPlanet={setSelectedPlanet}
        setIsMenuOpen={setIsMenuOpen}/>
      <Content 
        selectedPlanet={selectedPlanet}
        selectedMenu={selectedMenu}/>
    </div>
  );
}

export default App;
