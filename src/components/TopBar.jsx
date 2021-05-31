import React from 'react';
import Menus from './Menus';
import TopNavigation from './TopNavigation';

const TopBar = (props) => (
    <div>
        <div className="w-full flex justify-between md:flex-col items-center p-5 md:p-10">
            <h1 className="relative font-antonio text-planets text-cwhite uppercase">The Planets</h1>
            <button className="focus:outline-none md:hidden" onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}>
                <svg className={props.isMenuOpen ? "opacity-25" : ""}xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
            </button>
        </div>
        <TopNavigation 
            selectedPlanet={props.selectedPlanet}
            setSelectedPlanet={props.setSelectedPlanet}
            planets={props.planets}/>
        <div className="w-screen h-px bg-cgray opacity-20"></div>
        <Menus 
            selectedPlanet={props.selectedPlanet} 
            selectedMenu={props.selectedMenu}
            setSelectedMenu={props.setSelectedMenu}/>
    </div>
)

export default TopBar;