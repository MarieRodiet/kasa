import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './../../styles/rentalpage.scss';
//import RentalContent from '../../components/RentalContent';
import Loader from '../../components/Loader';
import RentalTags from '../../components/RentalTags';

function Rental() {
    const { id } = useParams();
    const [isLoading, updateLoading] = useState(false);
    const [data, setData] = useState([]);
    function getData() {
        updateLoading(true);
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
                updateLoading(false);
                setData(found);
            });
    }

    useEffect(() => {
        getData();
    });

    return { isLoading } ? (
        <Loader />
    ) : (
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
            <div className="rental-page-container-owner">
                <div className="rental-page-container-owner-stars">
                    <div className="star-container">
                        <svg
                            className="star-svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="svg-path"
                                d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                                fill="#FF6060"
                            />
                        </svg>
                    </div>
                    <div className="star-container">
                        <svg
                            className="star-svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="svg-path"
                                d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                                fill="#FF6060"
                            />
                        </svg>
                    </div>
                    <div className="star-container">
                        <svg
                            className="star-svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="svg-path"
                                d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                                fill="#FF6060"
                            />
                        </svg>
                    </div>
                    <div className="star-container">
                        <svg
                            className="star-svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="svg-path"
                                d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                                fill="#FF6060"
                            />
                        </svg>
                    </div>
                    <div className="star-container">
                        <svg
                            className="star-svg"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="svg-path"
                                d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                                fill="#FF6060"
                            />
                        </svg>
                    </div>
                </div>
                <div className="rental-page-container-owner-info">
                    <p className="rental-page-container-owner-info-name">
                        {data.host['name']}
                    </p>
                    <div className="rental-page-container-owner-info-picture"></div>
                    {/* <img
                        className="rental-page-container-owner-info-picture"
                        src={data.host['picture']}
                        alt="host"
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default Rental;
