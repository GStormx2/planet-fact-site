import React from 'react';
import {colorPalletMenu} from './Source';

const MenuItems = ({name, selectedPlanet}) => {
    return (
        <button className="flex flex-col justify-between items-center focus:outline-none">
            <p className="py-3 font-spartan font-bold text-menu-base text-cwhite uppercase tracking-lg">{name}</p>
            <div className={`w-20 h-1 ${colorPalletMenu[selectedPlanet.toLowerCase()]}`}></div>
        </button>
    );
}
export default MenuItems;