import React from 'react';
import './Presentation.css';
import Rating from 'components/Star/Rating';
import Tags from 'components/Tags/Tags';

class Presentation extends React.Component {
    render() {
        return (
            <main className="displayPresentation">
                <div className="presentationPresentation">
                    <h2 className="titlePresentation">{this.props.rent.title}</h2>
                    <p className="locationPresentation">{this.props.rent.location}</p>
                    <Tags currentRent={this.props.rent.tags} className="tagsPresentation" />
                </div>
                <div className="profileDisplay">
                    <div className="starPresentation">
                        <Rating rating={this.props.rent.rating} />
                    </div>
                    <div className="informationsDisplay">
                        <p className="profileNamePresentation">{this.props.rent.host.name}</p>
                        <img
                            className="profilePicturePresentation"
                            src={this.props.rent.host.picture}
                            alt="profile picture"
                        />
                    </div>
                </div>
            </main>
        );
    }
}

export default Presentation;
