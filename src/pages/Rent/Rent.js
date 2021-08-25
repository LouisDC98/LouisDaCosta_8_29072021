import React from 'react';
import { withRouter } from 'react-router';
import Accordion from 'components/Accordion/Accordion';
import { getNoticeById } from 'datas/fakeAPI';
import './Rent.css';
import Presentation from 'components/Presentation/Presentation';

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
        return (
            <React.Fragment>
                <Presentation rent={this.state.rent} />
                <article className="accordionRent">
                    <section className="accordionElement">
                        <Accordion title={'Description'} content={this.state.rent.description} />
                    </section>
                    <section className="accordionElement">
                        <Accordion
                            title={'Equipements'}
                            content={this.state.rent.equipments.join('\n')}
                        />
                    </section>
                </article>
            </React.Fragment>
        );
    }
}

export default withRouter(Rent);
