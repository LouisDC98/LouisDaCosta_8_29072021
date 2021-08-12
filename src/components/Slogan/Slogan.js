import React from 'react';
import './Slogan.css';

class Slogan extends React.Component {
    render() {
        return (
            <div className="background">
                <img
                    className="img"
                    src={process.env.PUBLIC_URL + this.props.img}
                    alt={this.props.img}
                />
                <div className="text">{this.props.text}</div>
            </div>
        );
    }
}

export default Slogan;
