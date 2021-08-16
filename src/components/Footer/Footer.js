import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer className="bgFooter">
                <Link to="/">
                    <img
                        className="logoFooter"
                        src={process.env.PUBLIC_URL + '/logoWhite.svg'}
                        alt="Kasa"
                    />
                </Link>
                <p className="textFooter">© 2020 Kasa. All rights reserved</p>
            </footer>
        );
    }
}

export default Footer;
