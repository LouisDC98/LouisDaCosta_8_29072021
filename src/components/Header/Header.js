import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Kasa" />
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
