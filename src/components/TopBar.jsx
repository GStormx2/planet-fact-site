import React from 'react';

const TopBar = ({setIsMenuOpen}) => (
    <div>
        <div className="flex justify-between items-center p-5">
            <h1 className="font-antonio text-planets text-cwhite uppercase">The Planets</h1>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
            </div>
        </div>
        <div className="w-screen h-px bg-cgray opacity-20"></div>
    </div>
)

export default TopBar;