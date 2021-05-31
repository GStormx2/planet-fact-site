import React from 'react';
import NavItems from './NavItems';

const NavBar = ({planets, isMenuOpen, setSelectedPlanet, setIsMenuOpen}) => (
    <div className={`absolute z-20 top-20 w-full transform ${isMenuOpen ? "block translate-x-0" : "-translate-x-full"} bg-cblack h-screen transition ease-in duration-150`}>
        {planets.map(val => {
            return (
                <div key={val}>
                    <NavItems name={val} setIsMenuOpen={setIsMenuOpen} setSelectedPlanet={setSelectedPlanet}/>
                    <div className="w-full h-px bg-cgray opacity-20"></div>
                </div>
            );
    })}
    </div>
)

export default NavBar;