import React from 'react';
import {menus} from './Source';
import MediumMenuItems from './MediumMenuItems';

const MediumMenu = (props) => {
    return (
        <div className="hidden md:flex md:flex-col md:items-center lg:mt-10">
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