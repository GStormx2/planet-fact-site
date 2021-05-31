import React from 'react';
import NavItems from './NavItems';

const NavBar = (props) => (
    <div className={`md:hidden absolute z-20 top-20 w-full transform ${props.isMenuOpen ? "block translate-x-0" : "-translate-x-full"} bg-cblack h-screen transition ease-in duration-150`}>
        {props.planets.map(val => {
            return (
                <div key={val}>
                    <NavItems name={val} setIsMenuOpen={props.setIsMenuOpen} setSelectedPlanet={props.setSelectedPlanet}/>
                    <div className="w-full h-px bg-cgray opacity-20"></div>
                </div>
            );
    })}
    </div>
)

export default NavBar;