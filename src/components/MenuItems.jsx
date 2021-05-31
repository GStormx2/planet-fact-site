import React from 'react';
import {colorPalletMenu} from './Source';

const MenuItems = (props) => {
    return (
        <button className="flex flex-col justify-between items-center focus:outline-none" onClick={()=> props.setSelectedMenu(props.name)}>
            <p className="py-3 font-spartan font-bold text-menu-base text-cwhite uppercase tracking-lg">{props.name}</p>
            <div className={`w-20 h-1 ${props.selectedMenu === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
        </button>
    );
}
export default MenuItems;