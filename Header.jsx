import React from 'react';
import '../css/Header.css'
import { Link } from 'react-router-dom';
import menu from './Menu.js'


const Header = () => {
    return (
        <div className='containeer'>
            <header className="nav">
                <ul className='menu'>
                    {menu.map((item, idx) => (
                        <li key={`menu item ${idx}`}> <Link to={item.link}>{item.title} {item.icon} </Link> </li>
                    ))}
                </ul>
            </header>

            <section className='mainHeader'>
                <h3 className='boxHeader'>Is it just me <br /><br /> or does this meal <br /><br /> look more scrumptious <br /><br /> because I’m on a diet?</h3>
                  
            </section>
         
        </div>

    );
};

export default Header;