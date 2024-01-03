import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Fullmetal Alchemist</h1>
            <nav>
                <ul>
                    <li>about us</li>
                    <li>info</li>
                    <li>support us</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;