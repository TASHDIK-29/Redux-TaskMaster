import React from 'react';
import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
    return (
        <nav aria-label="breadcrumb" className="w-full p-4 ">
            <ol className="flex h-8 space-x-2  w-1/4 mx-auto">
                <li className="flex items-center">
                    <Link to={"/"} rel="noopener noreferrer"
                        title="Back to homepage" className="flex items-center hover:underline">Home</Link>
                </li>
                <li className="flex items-center space-x-1">
                    <span className="">/</span>
                    <Link to={"/users"} rel="noopener noreferrer"
                        className="flex items-center px-1 capitalize hover:underline">Users</Link>
                </li>
                <li className="flex items-center space-x-1">
                    <span className="">/</span>
                    <Link to={"/tasks"} rel="noopener noreferrer"
                        className="flex items-center px-1 capitalize hover:underline">Tasks</Link>
                </li>
                <li className="flex items-center space-x-1">
                    <ModeToggle />
                </li>

            </ol>
        </nav>
    );
};

export default Navbar;