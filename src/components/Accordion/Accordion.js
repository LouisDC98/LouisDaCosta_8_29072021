import React from 'react';
import './Accordion.css';
import arrowDown from 'img/arrowDown.svg';
import arrowUp from 'img/arrowUp.svg';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { open: false };
    }

    handleClick() {
        this.setState((prevState) => ({
            open: !prevState.open
        }));
    }
    render() {
        const arrowPath = this.state.open ? arrowUp : arrowDown;

        return (
            <div className="accordionBody">
                <div className="accordionTitle" onClick={this.handleClick}>
                    <div>{this.props.title}</div>
                    <img src={arrowPath} />
                </div>
                <div
                    className="accordionContent"
                    style={{ display: this.state.open ? 'block' : 'none' }}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Accordion;
