import React from 'react';
import TopNavigationItems from './TopNavigationItems';

const TopNavigation = (props) => {
    return (
        <div className="hidden md:block xl:hidden">
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