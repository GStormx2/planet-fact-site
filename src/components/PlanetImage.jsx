import React from 'react';
import {planetSvgs, planetInternalSvg, planetGeologyImage} from './Source';

const PlanetImage = (props) => {
    const planetSize = {
        'earth'   : '50%',
        'mercury' : '30%',
        'venus'   : '45%',
        'mars'    : '35%',
        'jupiter' : '65%',
        'saturn'  : '65%',
        'uranus'  : '55%',
        'neptune' : '50%',
    }
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
            <div className="mt-16 md:mt-40 md:mb-40">
                <img className={`mx-auto ${planetMaxSize[props.selectedPlanet.toLowerCase()]}`} width={planetSize[props.selectedPlanet.toLowerCase()]} src={svg} alt={`${props.selectedPlanet}`}/>
            </div>
        );
    }
    else if (props.selectedMenu === 'structure') {
        return (
            <div className="mt-16 md:mt-24 md:mb-40">
                <img className={`mx-auto ${planetMaxSize[props.selectedPlanet.toLowerCase()]}`} width={planetSize[props.selectedPlanet.toLowerCase()]} src={internal} alt={`${props.selectedPlanet} internal`}/>
            </div>
        )
    }
    else if (props.selectedMenu === 'surface') {
        return (
            <div className="relative w-full mt-16 md:mt-24 md:mb-40">
                <img className={`mx-auto ${planetMaxSize[props.selectedPlanet.toLowerCase()]}`} width={planetSize[props.selectedPlanet.toLowerCase()]} src={svg} alt={`${props.selectedPlanet}`}/>
                <img className="absolute max-w-pointer left-1/2 transform -translate-x-1/2 -translate-y-1/2" width="25%" src={geology}  alt={`${props.selectedPlanet} geology`}/>
            </div>
        );
    }
}
export default PlanetImage;