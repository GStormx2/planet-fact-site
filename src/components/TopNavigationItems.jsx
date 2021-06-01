import React from 'react';
import {colorPalletMenu} from './Source';

const TopNavigationItems = (props) => {
    return (
        <button className="xl:mr-5 flex-1 flex flex-col justify-between items-center focus:outline-none" onClick={()=> props.setSelectedPlanet(props.name)}>
            <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
            <p className={`flex-1 mb-5 xl:mt-5 xl:mb-5 xl:m-0 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
            <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
        </button>
    );
}
export default TopNavigationItems;