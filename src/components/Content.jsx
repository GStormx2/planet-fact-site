import React from 'react';
import data from './Source';
import PlanetImage from './PlanetImage';
import PlanetDescription from './PlanetDescription';


const Content = (props) => {
    const info = data.filter(val => val.name === props.selectedPlanet);
    return (
        <div>
            <PlanetImage selectedMenu={props.selectedMenu} selectedPlanet={props.selectedPlanet}/>
            <PlanetDescription info={info[0]} selectedMenu={props.selectedMenu} selectedPlanet={props.selectedPlanet}/>
        </div>
    );
}
export default Content;