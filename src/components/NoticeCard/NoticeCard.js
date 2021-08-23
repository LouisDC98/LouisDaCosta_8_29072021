import React from 'react';
import './NoticeCard.css';
import { withRouter } from 'react-router';

class NoticeCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.history.push('/rent/' + this.props.notice.id);
    }

    render() {
        return (
            <figure className="card one" onClick={this.handleClick}>
                <img className="imgCard" src={this.props.notice.cover} alt="Notice 1" />
                <figcaption className="textCard">{this.props.notice.title}</figcaption>
            </figure>
        );
    }
}

export default withRouter(NoticeCard);
