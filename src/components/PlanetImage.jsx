import React from 'react';
import {planetSvgs, planetInternalSvg, planetGeologyImage} from './Source';

//width={planetSize[props.selectedPlanet.toLowerCase()]}
const PlanetImage = (props) => {
    const planetMaxSize = {
        'earth'   : 'max-w-earth',
        'mercury' : 'max-w-mercury',
        'venus'   : 'max-w-venus'  ,
        'mars'    : 'max-w-mars'   ,
        'jupiter' : 'max-w-jupiter',
        'saturn'  : 'max-w-saturn' ,
        'uranus'  : 'max-w-uranus' ,
        'neptune' : 'max-w-neptune',
    }

    const svg = planetSvgs[props.selectedPlanet.toLowerCase()];
    const internal = planetInternalSvg[props.selectedPlanet.toLowerCase()];
    const geology = planetGeologyImage[props.selectedPlanet.toLowerCase()];
    
    if (props.selectedMenu === 'overview') {
        return (
            <div className="mt-16 md:mt-20 md:mb-20 xl:w-full xl:m-5">
                <img className={`${props.selectedPlanet.toLowerCase()} mx-auto ${planetMaxSize[props.selectedPlanet.toLowerCase()]}`} src={svg} alt={`${props.selectedPlanet}`}/>
            </div>
        );
    }
    else if (props.selectedMenu === 'structure') {
        return (
            <div className="mt-16 md:mt-20 md:mb-20 xl:w-full xl:m-5">
                <img className={`${props.selectedPlanet.toLowerCase()} mx-auto ${planetMaxSize[props.selectedPlanet.toLowerCase()]}`} src={internal} alt={`${props.selectedPlanet} internal`}/>
            </div>
        )
    }
    else if (props.selectedMenu === 'surface') {
        return (
            <div className="relative w-full mb-28 mt-16 md:mt-20 md:mb-32 xl:m-5">
                <img className={`${props.selectedPlanet.toLowerCase()} mx-auto ${planetMaxSize[props.selectedPlanet.toLowerCase()]}`} src={svg} alt={`${props.selectedPlanet}`}/>
                <img className="pointer absolute max-w-pointer top-3/4 mt-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={geology}  alt={`${props.selectedPlanet} geology`}/>
            </div>
        );
    }
}
export default PlanetImage;