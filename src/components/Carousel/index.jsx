import { useEffect, useState } from 'react';
import './../../styles/carousel.scss';

function Carousel({ pictures }) {
    const pics = [
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg',
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg',
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg',
        'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg',
    ];
    const [currentPic, setPic] = useState(0);
    const nbOfPics = pics.length - 1;
    return (
        <div className="rental-page-container-cover">
            <div
                className="rental-page-container-cover-previousArrow"
                onClick={() =>
                    currentPic === 0 ? setPic(nbOfPics) : setPic(currentPic - 1)
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
            <img
                className="rental-page-container-cover-currentPic"
                alt="couverture de la location"
                src={pics[currentPic]}
            />
            <div
                className="rental-page-container-cover-nextArrow"
                onClick={() =>
                    currentPic === nbOfPics ? setPic(0) : setPic(currentPic + 1)
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
        </div>
    );
}
export default Carousel;
