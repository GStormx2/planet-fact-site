import React from 'react';
import data from './Source';
import PlanetImage from './PlanetImage';
import PlanetDescription from './PlanetDescription';
import MediumMenu from './MediumMenu';


const Content = (props) => {
    const info = data.filter(val => val.name === props.selectedPlanet);
    return (
        <div>
            <PlanetImage selectedMenu={props.selectedMenu} selectedPlanet={props.selectedPlanet}/>
            <div className="md:flex">
                <PlanetDescription info={info[0]} selectedMenu={props.selectedMenu} selectedPlanet={props.selectedPlanet}/>
                <MediumMenu 
                    selectedPlanet={props.selectedPlanet}
                    setSelectedMenu={props.setSelectedMenu}
                    selectedMenu={props.selectedMenu}
                    />
            </div>
        </div>
    );
}
export default Content;