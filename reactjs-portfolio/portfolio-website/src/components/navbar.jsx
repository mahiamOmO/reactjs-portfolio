// src/components/Navbar.jsx
import React from 'react';
import { personalInfo } from '../data'; 

const Navbar = () => {
    // List of navigation links (IDs must match section IDs in App.jsx)
    const navLinks = [
        { name: 'ABOUT ME', id: 'about' },
        { name: 'SKILLS', id: 'skills' },
        { name: 'PROJECTS', id: 'projects' },
        { name: 'CONTACT', id: 'contact' }
    ];

    const MenuContent = (
        <>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <a href={`#${link.id}`} className="hover:text-primary transition-colors text-lg font-medium">
                        {link.name}
                    </a>
                </li>
            ))}
            <li>
                <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors text-lg font-medium"
                >
                    GITHUB
                </a>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-lg sticky top-0 z-10">
            <div className="container mx-auto px-4">
                
                {/* Brand/Logo (Your Name) */}
                <div className="flex-1">
                    <a href="#home" className="btn btn-ghost text-xl font-extrabold text-primary">
                        {personalInfo.name.split(' ')[0]} 
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="flex-none hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {MenuContent}
                    </ul>
                </div>

                {/* Mobile Menu (Dropdown) */}
                <div className="flex-none lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                            {MenuContent}
                        </ul>
                    </div>
                </div>
                
                {/* Theme Toggle (Optional but recommended) */}
                {/* <label className="flex cursor-pointer gap-2 ml-4">
                    <input type="checkbox" value="dark" className="toggle theme-controller"/>
                </label> */}

            </div>
        </div>
    );
};

export default Navbar;