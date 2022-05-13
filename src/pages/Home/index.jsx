import bgPicture from './../../assets/home-bg-picture.png';
import './../../styles/picturesection.scss';
import { useState, useEffect } from 'react';
import RentalFragment from '../../components/RentalFragment';
import RentalSection from '../../components/RentalSection';

function Home() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('./../data/data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    };
    
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <section className="img-box">
                <div className="black-bg">
                    <img src={bgPicture} alt="" />
                </div>
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
            <RentalSection className="rentals"></RentalSection>
            {data &&
                data.length > 0 &&
                data.map((item) => (
                    <RentalFragment key={item.id} title={item.title} />
                ))}
        </div>
    );
}

export default Home;
