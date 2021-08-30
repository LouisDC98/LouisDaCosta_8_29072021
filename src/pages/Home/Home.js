import React from 'react';
import Slogan from 'components/Slogan/Slogan';
import NoticeCard from 'components/NoticeCard/NoticeCard';
import './Home.css';
import { getAllNotices } from 'datas/fakeAPI';
import background from 'img/background.png';
import Loader from 'components/Loader/Loader';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rents: null, loading: true, error: false };
    }

    componentDidMount() {
        getAllNotices()
            .then((data) => {
                this.setState({ rents: data });
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
            <div>Erreur</div>
        ) : (
            <>
                <Slogan img={background} text="Chez vous, partout et ailleurs" />
                <div className="bg wrapper">
                    {this.state.rents.map((rent) => (
                        <NoticeCard key={rent.id} notice={rent} />
                    ))}
                </div>
            </>
        );
    }
}

export default Home;
