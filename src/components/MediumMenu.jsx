import React from 'react';
import {menus} from './Source';
import MediumMenuItems from './MediumMenuItems';

const MediumMenu = (props) => {
    return (
        <div className="hidden md:flex md:flex-col items-center justify-center lg:mt-2">
            {menus.map((val, index) => 
                <MediumMenuItems 
                    key={val} 
                    name={val}
                    number={index+1}
                    selectedPlanet={props.selectedPlanet}
                    selectedMenu={props.selectedMenu}
                    setSelectedMenu={props.setSelectedMenu}/>)}
        </div>
    );
}
export default MediumMenu;