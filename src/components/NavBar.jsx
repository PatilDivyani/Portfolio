import React from "react";
// import {BrowserRouter as Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <a href="/Portfolio" className="nav_logo" id="nav_logo">
                    Divyani
                </a>
                <div className="nav-menu">
                    <ul className="navList">
                       
                        <li className="nav-items">
                            <a href="#about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li className="nav-items">
                         
                         <a href="#skill" className="nav-link">
                             Skills
                         </a>
                     </li>
                        <li className="nav-items">
                            <a href="#project" className="nav-link">
                                Projects
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="#contact" className="nav-link">
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
