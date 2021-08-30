import React from 'react';
import { withRouter } from 'react-router';
import Carousel from 'components/Carousel/Carousel';
import Accordion from 'components/Accordion/Accordion';
import { getNoticeById } from 'datas/fakeAPI';
import './Rent.css';
import Presentation from 'components/Presentation/Presentation';
import { Redirect } from 'react-router';
import Loader from 'components/Loader/Loader';

class Rent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rent: null, loading: true };
    }

    componentDidMount() {
        getNoticeById(this.props.match.params.id)
            .then((data) => {
                this.setState({ rent: data });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ error: true });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        return this.state.loading ? (
            <Loader />
        ) : this.state.error ? (
            <Redirect to="/" />
        ) : (
            <React.Fragment>
                <Carousel pictures={this.state.rent.pictures} />
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
