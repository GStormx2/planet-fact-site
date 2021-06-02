import React from 'react';
import data from './Source';
import PlanetImage from './PlanetImage';
import PlanetDescription from './PlanetDescription';
import MediumMenu from './MediumMenu';


const Content = (props) => {
    const info = data.filter(val => val.name === props.selectedPlanet);
    return (
        <div className="xl:mt-5 xl:grid xl:grid-cols-2 xl:justify-center xl:items-center">
            <PlanetImage selectedMenu={props.selectedMenu} selectedPlanet={props.selectedPlanet}/>
            <div className="md:px-10 md:flex md:items-center md:justify-center xl:flex-col">
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