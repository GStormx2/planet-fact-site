import React from 'react';
import {colorPalletTab} from './Source';


const NavItems = ({name, setIsMenuOpen, setSelectedPlanet}) => {
    const buttonClick = () => {
        setIsMenuOpen(false);
        setSelectedPlanet(name);
    }
    return(
        <button className="flex justify-between w-full p-5 focus:outline-none" onClick={buttonClick}>
            <div className="flex items-center justify-center">
                <div className={`circle ${colorPalletTab[name.toLowerCase()]}`}></div>
                <p className="mt-1 ml-3 font-spartan font-bold text-tab-base text-cwhite uppercase">{name}</p>
            </div>
            <div className="font-antonio text-cwhite opacity-40">{`>`}</div>
        </button>
    );
}

export default NavItems;