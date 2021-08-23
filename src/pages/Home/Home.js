import React from 'react';
import Slogan from 'components/Slogan/Slogan';
import NoticeCard from 'components/NoticeCard/NoticeCard';
import './Home.css';
import { getAllNotices } from 'datas/fakeAPI';
import background from 'img/background.png';

class Home extends React.Component {
    render() {
        const dataArray = getAllNotices();
        return (
            <>
                <Slogan img={background} text="Chez vous, partout et ailleurs" />
                <div className="bg wrapper">
                    {dataArray.map((data) => (
                        <NoticeCard key={data.id} notice={data} />
                    ))}
                </div>
            </>
        );
    }
}

export default Home;
