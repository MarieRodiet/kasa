import './../../../styles/RentalPage/rentalpage.scss';
import './../../../styles/RentalPage/carousel.scss';
import Host from '../Host';
import Stars from '../Stars';
import Gallery from '../Gallery';
import Collapse from '../../AppLayout/Collapse';
import RentalTags from '../RentalTags';

/**
 * 
 * @param {object} data
 * @returns <RentalContent data={data} /> containing the following components:
 * HOST {object} data.host
 * STARS {number} data.rating
 * GALLERY {object} data.pictures
 * COLLAPSE {string} data.description
 * RENTALTAGS {object} data.tags
 */
function RentalContent({ data }) {
    return (
        <div className="rental-page-container">
            <Gallery pictures={data.pictures} />
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
