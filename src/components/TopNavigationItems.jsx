import React from 'react';
import {colorPalletMenu} from './Source';

const TopNavigationItems = (props) => {
    return (
        <button className="flex-1 flex flex-col justify-between items-center focus:outline-none" onClick={()=> props.setSelectedPlanet(props.name)}>
            <p className={`mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
            <div className={`w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
        </button>
    );
}
export default TopNavigationItems;