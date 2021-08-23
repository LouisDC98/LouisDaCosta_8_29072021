import React from 'react';
import { withRouter } from 'react-router';
import { getNoticeById } from '../../datas/fakeAPI';

class Rent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rent: null, loading: true };
    }

    componentDidMount() {
        const data = getNoticeById(this.props.match.params.id);

        this.setState({ rent: data, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading</div>;
        }
        return <div>Rent n° {this.state.rent.id}</div>;
    }
}

export default withRouter(Rent);
