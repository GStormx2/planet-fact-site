import React from 'react';
import {colorPalletTab} from './Source';
import {default as chevron} from '../assets/icon-chevron.svg';

const NavItems = ({name, setIsMenuOpen, setSelectedPlanet}) => {
    const buttonClick = () => {
        setIsMenuOpen(false);
        setSelectedPlanet(name);
    }
    return(
        <button className="flex justify-between items-center w-full p-5 focus:outline-none" onClick={buttonClick}>
            <div className="flex items-center justify-center">
                <div className={`circle ${colorPalletTab[name.toLowerCase()]}`}></div>
                <p className="mt-1 ml-6 font-spartan font-bold text-tab-base text-cwhite uppercase tracking-widest">{name}</p>
            </div>
            <img src={chevron} alt=""/>
        </button>
    );
}

export default NavItems;