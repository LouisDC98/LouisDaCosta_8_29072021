import React from 'react';
import Star from './Star';

class Rating extends React.Component {
    render() {
        const notes = [1, 2, 3, 4, 5];

        return (
            <>
                {notes.map((note) => (
                    <Star key={note} color={note <= this.props.rating} />
                ))}
            </>
        );
    }
}

export default Rating;
