import React from 'react';
import Slogan from '../../components/Slogan/Slogan';
import NoticeCard from '../../components/NoticeCard/NoticeCard';
import './Home.css';
import { getAllNotices } from '../../datas/fakeAPI';

class Home extends React.Component {
    render() {
        const dataArray = getAllNotices();
        return (
            <React.Fragment>
                <Slogan img="./background.png" text="Chez vous, partout et ailleurs" />
                <div className="bg wrapper">
                    {dataArray.map((data) => (
                        <NoticeCard key={data.id} notice={data} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
