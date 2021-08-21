import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from 'img/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <img src={logo} alt="Kasa" />
                </Link>
                <nav>
                    <Link to="/" className="menu">
                        Accueil
                    </Link>
                    <Link to="/about" className="menu">
                        A propos
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;
