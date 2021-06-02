import React from 'react';
import {colorPalletMenu} from './Source';

const TopNavigationItems = (props) => {
    if (props.name === 'Earth'){
        return (
            <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
            onClick={()=> props.setSelectedPlanet(props.name)}>
                <div className={`text-center hover:bg-earth transition duration-150 ease-linear hover:cursor-pointer`}>
                    <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    
                    <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                    <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                </div>
            </div>
        );
    }
    else if (props.name === 'Mercury') {
        return (
            <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
            onClick={()=> props.setSelectedPlanet(props.name)}>
                <div className={`text-center hover:bg-mercury transition duration-150 ease-linear hover:cursor-pointer`}>
                    <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    
                    <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                    <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                </div>
            </div>
        );
    }
    else if (props.name === 'Venus') {
        return (
            <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
            onClick={()=> props.setSelectedPlanet(props.name)}>
                <div className={`text-center hover:bg-venus transition duration-150 ease-linear hover:cursor-pointer`}>
                    <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    
                    <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                    <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                </div>
            </div>
        );
    }
    else if (props.name === 'Mars') {
        return (
            <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
            onClick={()=> props.setSelectedPlanet(props.name)}>
                <div className={`text-center hover:bg-mars transition duration-150 ease-linear hover:cursor-pointer`}>
                    <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    
                    <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                    <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                </div>
            </div>
        );
    }
    else if (props.name === 'Jupiter') {
        return (
            <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
            onClick={()=> props.setSelectedPlanet(props.name)}>
                <div className={`text-center hover:bg-jupiter transition duration-150 ease-linear hover:cursor-pointer`}>
                    <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    
                    <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                    <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                </div>
            </div>
        );
    }
    else if (props.name === 'Saturn') {
        return (
            <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
            onClick={()=> props.setSelectedPlanet(props.name)}>
                <div className={`text-center hover:bg-saturn transition duration-150 ease-linear hover:cursor-pointer`}>
                    <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    
                    <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                    <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                </div>
            </div>
        );
    }
    else if (props.name === 'Uranus') {
        return (
            <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
            onClick={()=> props.setSelectedPlanet(props.name)}>
                <div className={`text-center hover:bg-uranus transition duration-150 ease-linear hover:cursor-pointer`}>
                    <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    
                    <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                    <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                </div>
            </div>
        );
    }
    else if (props.name === 'Neptune') {
        return (
            <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
            onClick={()=> props.setSelectedPlanet(props.name)}>
                <div className={`text-center hover:bg-neptune transition duration-150 ease-linear hover:cursor-pointer`}>
                    <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                    
                    <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                    <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                </div>
            </div>
        );
    }

    return (
        <div className={`xl:mr-5 h-full flex-1 flex flex-col justify-between items-center focus:outline-none}`} 
        onClick={()=> props.setSelectedPlanet(props.name)}>
            <div className={`text-center transition duration-150 ease-linear hover:cursor-pointer`}>
                <div className={`hidden xl:block w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                <div className={`hidden md:invisible xl:hidden w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
                
                <p className={`flex-1 mb-5 mt-5 xl:mb-5 font-spartan font-bold text-tab-md text-cwhite uppercase tracking-widest ${props.selectedPlanet === props.name ? "opacity-100" : "opacity-75"}`} >{props.name}</p>
                <div className={`xl:invisible w-20 h-1 ${props.selectedPlanet === props.name ? "visible": "invisible"} ${colorPalletMenu[props.selectedPlanet.toLowerCase()]}`}></div>
            </div>
        </div>
    );

}
export default TopNavigationItems;