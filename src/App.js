import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import data from './components/Source';

function App() {
  const planets = data.map(val => val.name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState('earth');
  const [selectedMenu, setSelectedMenu] = useState('overview');

  return (
    <div>
      <TopBar 
        setIsMenuOpen={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
        selectedPlanet={selectedPlanet}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedPlanet}/>
      <NavBar 
        planets={planets} 
        isMenuOpen={isMenuOpen} 
        setSelectedPlanet={setSelectedPlanet}
        setIsMenuOpen={setIsMenuOpen}/>
    </div>
  );
}

export default App;
