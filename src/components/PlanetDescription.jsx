import React from 'react';
import {default as direct} from '../assets/icon-source.svg';
const PlanetDescription = (props) => {;
    if (props.selectedMenu === 'overview') {
        return (
            <div className="mt-16 md:m-0 md:pr-12 xl:pr-0 w-full text-center xl:w-96 md:text-left xl:mt-10">
                <h1 className="font-antonio font-medium text-heading-base md:text-heading-md lg:text-heading-lg text-cwhite uppercase">{props.selectedPlanet}</h1>
                <p className="mt-5 px-7 lg:mt-12 md:p-0 md:mt-10 font-spartan font-normal text-body-base lg:text-body-lg text-cwhite">{props.info.overview.content}</p>
                <div className="mt-5 lg:mt-5 md:mt-10">
                    <p className="inline font-spartan text-source-base lg:text-source-lg text-cwhite opacity-50">
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
            <div className="mt-16 md:m-0 md:pr-12 xl:pr-0 w-full text-center xl:w-96 md:text-left xl:mt-10">
                <h1 className="font-antonio font-medium text-heading-base md:text-heading-md lg:text-heading-lg text-cwhite uppercase">{props.selectedPlanet}</h1>
                <p className="mt-5 px-7 lg:mt-12 md:p-0 md:mt-10 font-spartan font-normal text-body-base lg:text-body-lg text-cwhite">{props.info.structure.content}</p>
                <div className="mt-5 lg:mt-5 md:mt-10">
                    <p className="inline font-spartan text-source-base lg:text-source-lg text-cwhite opacity-50">
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
            <div className="mt-16 md:m-0 md:pr-12 xl:pr-0 w-full text-center xl:w-96 md:text-left xl:mt-10">
                <h1 className="font-antonio font-medium text-heading-base md:text-heading-md lg:text-heading-lg text-cwhite uppercase">{props.selectedPlanet}</h1>
                <p className="mt-5 px-7 lg:mt-12 md:p-0 md:mt-10 font-spartan font-normal text-body-base lg:text-body-lg text-cwhite">{props.info.geology.content}</p>
                <div className="mt-5 lg:mt-5 md:mt-10">
                    <p className="inline font-spartan text-source-base lg:text-source-lg text-cwhite opacity-50">
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