import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <TopBar setIsMenuOpen={setIsMenuOpen}/>
      <NavBar isMenuOpen={isMenuOpen}/>
    </div>
  );
}

export default App;
