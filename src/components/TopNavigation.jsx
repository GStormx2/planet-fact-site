import React from 'react';
import TopNavigationItems from './TopNavigationItems';

const TopNavigation = (props) => {
    console.log("in topnavitem", props.planets);
    return (
        <div className="hidden md:block">
            <div className="px-5 w-full flex flex-row justify-between items-center">
                {props.planets.map(val => 
                    <TopNavigationItems 
                        key={val} 
                        name={val}
                        selectedPlanet={props.selectedPlanet}
                        setSelectedPlanet={props.setSelectedPlanet}/>)}
            </div>
        </div>
    );
}
export default TopNavigation;