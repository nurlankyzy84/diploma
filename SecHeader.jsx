import React from 'react';
import '../css/Header.css'
import { Link } from 'react-router-dom';
import menu from './Menu.js'

const SecHeader = () => {
    return (
        <div>
            <header className="nav">
                <ul className='menu'>
                    {menu.map((item, idx) => (
                        <li key={`menu item ${idx}`}> <Link to={item.link}>{item.title} {item.icon} </Link> </li>
                    ))}
                </ul>
            </header>
        </div>
    );
};

export default SecHeader;