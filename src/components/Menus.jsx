import React from 'react';
import MenuItems from './MenuItems';
import {menus} from './Source';

const Menus = (props) => {
    return (
        <div className="md:hidden">
            <div className="flex justify-between px-5">
                {menus.map(val => <MenuItems key={val} name={val} selectedPlanet={props.selectedPlanet} selectedMenu={props.selectedMenu} setSelectedMenu={props.setSelectedMenu}/>)}
            </div>
            <div className="w-full h-px bg-cgray opacity-20"></div>
        </div>
    );
}

export default Menus;