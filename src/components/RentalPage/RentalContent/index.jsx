import RentalTags from '../RentalTags';
import './../../../styles/RentalPage/rentalpage.scss';
import './../../../styles/RentalPage/carousel.scss';
import { useState } from 'react';
import Host from '../Host';
import Equipments from '../Equipments';
import Stars from '../Stars';
import Carousel from '../Carousel';
import Collapse from '../../AppLayout/Collapse';

function RentalContent({ data }) {
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
                <Collapse
                    className="rental-page-container-boxes-description"
                    title="Description"
                    description={data.description}
                    isList={false}
                />
                <Collapse
                    className="rental-page-container-boxes-equipement"
                    title="Equipement"
                    description={data.equipments}
                    isList={true}
                />
            </div>
        </div>
    );
}
export default RentalContent;
