import RentalTags from '../RentalTags';
import './../../../styles/RentalPage/rentalpage.scss';
import './../../../styles/RentalPage/carousel.scss';
import { useState } from 'react';
import Host from '../Host';
import Equipments from '../Equipments';
import Stars from '../Stars';
import Carousel from '../Carousel';


function RentalContent({ data }) {
    const [toggledDescription, setToggleDescription] = useState(true);
    const [toggledEquipment, setToggleEquipment] = useState(true);
    return (
        <div className="rental-page-container">
            <Carousel pictures={data.pictures} />
            <div className="rental-page-container-info">
                <div className="rental-page-container-info-rental">
                    <p className="rental-page-container-info-rental-title">
                        {data.title}
                    </p>
                    <p className="rental-page-container-info-rental-location">
                        {data.location}
                    </p>
                </div>
                <div className="rental-page-container-info-tags">
                    <RentalTags tags={data.tags} />
                </div>
            </div>

            <div className="rental-page-container-owner">
                <div className="rental-page-container-owner-stars">
                    {data.rating ? (
                        <Stars rating={data.rating} />
                    ) : (
                        <Stars
                            className="rental-page-container-owner-stars"
                            rating={'5'}
                        />
                    )}
                </div>

                {data.host ? (
                    <Host host={data.host} />
                ) : (
                    <div className="rental-page-container-owner-info-picture"></div>
                )}
            </div>
            <div className="rental-page-container-boxes">
                <div className="rental-page-container-boxes-description">
                    <div className="rental-page-container-boxes-description-top">
                        <div className="rental-page-container-boxes-description-top-title">
                            Description
                        </div>
                        <div
                            onClick={() =>
                                setToggleDescription(!toggledDescription)
                            }
                            className="rental-page-container-boxes-description-top-icon"
                        >
                            <svg
                                className={
                                    toggledDescription
                                        ? 'svg-up-d'
                                        : 'svg-down-d'
                                }
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="svg-path"
                                    d="M13.8495 9.23864L15.2079 7.86941L7.60994 0.261718L0.0120036 7.87711L1.37042 9.23864L7.60994 2.9848L13.8495 9.23864Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className={
                            toggledDescription
                                ? 'rental-page-container-boxes-description-text-show'
                                : 'rental-page-container-boxes-description-text-hide'
                        }
                    >
                        {data.description}
                    </div>
                </div>
                <div className="rental-page-container-boxes-equipement">
                    <div className="rental-page-container-boxes-equipement-top">
                        <div className="rental-page-container-boxes-equipement-top-title">
                            Equipement
                        </div>
                        <div
                            onClick={() =>
                                setToggleEquipment(!toggledEquipment)
                            }
                            className="rental-page-container-boxes-equipement-top-icon"
                        >
                            <svg
                                className={
                                    toggledEquipment ? 'svg-up-e' : 'svg-down-e'
                                }
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className="svg-path"
                                    d="M13.8495 9.23864L15.2079 7.86941L7.60994 0.261718L0.0120036 7.87711L1.37042 9.23864L7.60994 2.9848L13.8495 9.23864Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div
                        className={
                            toggledEquipment
                                ? 'rental-page-container-boxes-equipement-text-show'
                                : 'rental-page-container-boxes-equipement-text-hide'
                        }
                    >
                        <Equipments equipments={data.equipments} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RentalContent;
