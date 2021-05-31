import React from 'react';
import data from './Source';
import StatisticsItems from './StatisticsItems';

const Statistics = (props) => {
    const info = data.filter(val => val.name === props.selectedPlanet);
    console.log(info);
    return (
        <div className="px-7 mt-7 mb-7 flex flex-col">
            <StatisticsItems name={'Rotation Time'} val={info[0].rotation}/>
            <StatisticsItems name={'Revolution Time'} val={info[0].revolution}/>
            <StatisticsItems name={'Radius'} val={info[0].radius}/>
            <StatisticsItems name={'Average Temp.'} val={info[0].temperature}/>
        </div>
    );
}
export default Statistics;