import React from 'react';

const StatisticsItems = (props) => {
    
    return (
        <div className="py-3 px-5 mb-3 flex flex-row justify-between items-center text-cwhite border border-cgray border-opacity-20">
            <p className="font-spartan font-bold text-stat-name-base opacity-50 uppercase tracking-md">{props.name}</p>
            <p className="font-antonio text-stat-val-base uppercase">{props.val}</p>
        </div>
    );
}
export default StatisticsItems;