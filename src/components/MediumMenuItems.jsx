import React from 'react';
import {colorPalletMenu} from './Source';

const MediumMenuItems = (props) => {
    let menuName = '';
    if (props.name === 'overview') {menuName = 'overview'}
    else if (props.name === 'structure') {menuName = 'internal structure'}
    else if (props.name === 'surface') {menuName = 'surface geology'}
    return (
        <button className={`w-72 mt-3 h-10 text-left ${props.name === props.selectedMenu ? colorPalletMenu[props.selectedPlanet.toLowerCase()] : "hover:bg-cgray"} border border-cgray border-opacity-20`} onClick={() => props.setSelectedMenu(props.name)}>
            <span className="ml-6 inline font-spartan font-bold text-menu-base text-cwhite opacity-50">{`0${props.number}`}</span>
            <p className="ml-4 inline font-spartan font-bold text-menu-base text-cwhite tracking-widest uppercase">{menuName}</p>
        </button>
    );
}
export default MediumMenuItems;