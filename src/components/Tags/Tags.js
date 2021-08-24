import React from 'react';
import Tag from 'components/Tag/Tag.js';
import './Tags.css';

class Tags extends React.Component {
    render() {
        return (
            <div className="tagsShape">
                {this.props.currentRent.map((data) => (
                    <Tag key={data} tag={data} />
                ))}
            </div>
        );
    }
}

export default Tags;
