import React from 'react';
import './Tag.css';

class Tag extends React.Component {
    render() {
        return <div className="tags">{this.props.tag}</div>;
    }
}

export default Tag;
