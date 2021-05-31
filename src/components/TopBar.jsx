import React from 'react';
import Menus from './Menus';

const TopBar = (props) => (
    <div>
        <div className="flex justify-between items-center p-5">
            <h1 className="relative font-antonio text-planets text-cwhite uppercase">The Planets</h1>
            <button className="focus:outline-none" onClick={() => props.setIsMenuOpen(!props.isMenuOpen)}>
                <svg className={props.isMenuOpen ? "opacity-25" : ""}xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
            </button>
        </div>
        <div className="w-screen h-px bg-cgray opacity-20"></div>
        <Menus selectedPlanet={props.selectedPlanet}/>
    </div>
)

export default TopBar;