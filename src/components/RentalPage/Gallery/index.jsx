import { useState } from 'react';
import './../../../styles/RentalPage/carousel.scss';

/**
 *
 * @param {object} pictures
 * @returns pictures.length === 1 ? renders picture ONLY
 * ELSE renders pictures with clickable arrows on each sides
 */
function Gallery({ pictures }) {
    const [currentPic, setPic] = useState(0);
    const nbOfPics = pictures?.length - 1;
    return (
        <div className="rental-page-container-cover">
            {nbOfPics !== 0 ? (
                <div
                    className="rental-page-container-cover-previousArrow"
                    onClick={() =>
                        currentPic === 0
                            ? setPic(nbOfPics)
                            : setPic(currentPic - 1)
                    }
                >
                    <svg
                        viewBox="0 0 13 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.48999 18.13L2.25999 19.9L12.16 9.99998L2.25999 0.0999756L0.48999 1.86998L8.61999 9.99998L0.48999 18.13Z"
                            fill="white"
                        />
                    </svg>
                </div>
            ) : null}

            {pictures ? (
                <img
                    className="rental-page-container-cover-currentPic"
                    alt="couverture de la location"
                    src={pictures[currentPic]}
                />
            ) : null}

            {pictures && nbOfPics !== 0 ? (
                <div
                    className="rental-page-container-cover-nextArrow"
                    onClick={() =>
                        currentPic === nbOfPics
                            ? setPic(0)
                            : setPic(currentPic + 1)
                    }
                >
                    <svg
                        viewBox="0 0 13 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.48999 18.13L2.25999 19.9L12.16 9.99998L2.25999 0.0999756L0.48999 1.86998L8.61999 9.99998L0.48999 18.13Z"
                            fill="white"
                        />
                    </svg>
                </div>
            ) : null}
        </div>
    );
}
export default Gallery;
