import React from 'react';
import MenuItems from './MenuItems';

const menunNames = ['overview', 'structure', 'surface']

const Menus = ({selectedPlanet}) => {
    return (
        <div>
            <div className="flex justify-between px-5">
                {menunNames.map(val => <MenuItems key={val} name={val} selectedPlanet={selectedPlanet}/>)}
            </div>
            <div className="w-full h-px bg-cgray opacity-20"></div>
        </div>
    );
}

export default Menus;