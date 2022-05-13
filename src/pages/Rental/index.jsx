import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './../../styles/rentalpage.scss';
import RentalTags from '../../components/RentalTags';

function Rental() {
    const { id } = useParams();

    const [data, setData] = useState([]);
    function getData() {
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
                let found = myJson.find((element) => element.id === id);
                setData(found);
            });
    }

    useEffect(() => {
        getData();
    });

    return (
        <div className="rental-page-container">
            <img
                className="rental-page-container-cover"
                alt="couverture de la location"
                src={data.cover}
            />
            <div className="rental-page-container-info">
                <p className="rental-page-container-info-title">{data.title}</p>
                <p className="rental-page-container-info-location">
                    {data.location}
                </p>
            </div>
            <div className="rental-page-container-tags">
                <RentalTags tags={data.tags} />
            </div>
        </div>
    );
}

export default Rental;
