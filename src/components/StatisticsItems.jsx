import React from 'react';

const StatisticsItems = (props) => {
    
    return (
        <div className="py-4 px-5 mb-3 md:ml-3 flex flex-row md:flex-col md:flex-1 justify-between items-center md:items-left text-cwhite border border-cgray border-opacity-20">
            <p className="font-spartan font-bold text-stat-name-base lg:text-stat-name-lg opacity-50 uppercase tracking-md">{props.name}</p>
            <p className="md:mt-2 font-antonio text-stat-val-base md:text-stat-val-md lg:stat-val-lg uppercase">{props.val}</p>
        </div>
    );
}
export default StatisticsItems;