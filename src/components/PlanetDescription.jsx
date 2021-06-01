import React from 'react';
import {default as direct} from '../assets/icon-source.svg';
const PlanetDescription = (props) => {;
    if (props.selectedMenu === 'overview') {
        return (
            <div className="mt-16 md:m-0 md:pr-12 w-full text-center md:flex-1 md:text-left">
                <h1 className="font-antonio font-medium text-heading-base md:text-heading-md text-cwhite uppercase">{props.selectedPlanet}</h1>
                <p className="mt-5 px-7 md:p-0 font-spartan font-normal text-body-base text-cwhite">{props.info.overview.content}</p>
                <div className="mt-5">
                    <p className="inline font-spartan text-source-base text-cwhite opacity-50">
                        Soruce : <a className="underline font-bold" target="_blank" rel="noopener noreferrer" href={props.info.overview.source}>
                            Wikipedia</a>
                    </p>
                    <img className="ml-1 mt-1 inline max-w-chevron" width="3.5%" src={direct} alt=""/>    
                </div>
            </div>
        );
    }
    else if (props.selectedMenu === 'structure') {
        return (
            <div className="mt-16 md:m-0 md:pr-12 w-full text-center md:text-left">
                <h1 className="font-antonio font-medium text-heading-base md:text-heading-md text-cwhite uppercase">{props.selectedPlanet}</h1>
                <p className="mt-5 px-7 md:p-0 font-spartan font-normal text-body-base text-cwhite">{props.info.structure.content}</p>
                <div className="mt-5">
                    <p className="inline font-spartan text-source-base text-cwhite opacity-50">
                        Soruce : <a className="underline font-bold" target="_blank" rel="noopener noreferrer" href={props.info.structure.source}>
                            Wikipedia</a>
                    </p>
                    <img className="ml-1 mt-1 inline max-w-chevron" width="3.5%" src={direct} alt=""/>    
                </div>
            </div>
        );
    }
    else if (props.selectedMenu === 'surface') {
        return (
            <div className="mt-16 md:m-0 md:pr-12 w-full text-center md:text-left">
                <h1 className="font-antonio font-medium text-heading-base md:text-heading-md text-cwhite uppercase">{props.selectedPlanet}</h1>
                <p className="mt-5 px-7 md:p-0 font-spartan font-normal text-body-base text-cwhite">{props.info.geology.content}</p>
                <div className="mt-5">
                    <p className="inline font-spartan text-source-base text-cwhite opacity-50">
                        Soruce : <a className="underline font-bold" target="_blank" rel="noopener noreferrer" href={props.info.geology.source}>
                            Wikipedia</a>
                    </p>
                    <img className="ml-1 mt-1 inline max-w-chevron" width="3.5%" src={direct} alt=""/>    
                </div>
            </div>
        );
    }
    
    
}
export default PlanetDescription;