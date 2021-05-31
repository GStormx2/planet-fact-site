import React from 'react';
import data from './Source';
import {default as mercury} from '../assets/planet-mercury.svg'
const Content = (props) => {
    const info = data.filter(val => val.name === props.selectedPlanet);

    console.log(info);
    return (
        <img width="50%" src={mercury}/>
    );
}
export default Content;