import './../../styles/rentalpage.scss';

function Stars({ rating }) {
    let nbOfRed = parseInt({ rating }.rating);
    let arrayRed = new Array(nbOfRed).fill('RED');
    let arrayGray = new Array(5 - nbOfRed).fill('NOPE');
    let stars = [...arrayRed, ...arrayGray];

    return stars.map((element, index) =>
        element === 'RED' ? (
            <div
                key={index}
                className="rental-page-container-owner-stars-star-container"
            >
                <svg
                    className="star-svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="svg-path"
                        d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                        fill="#ff6060"
                    />
                </svg>
            </div>
        ) : (
            <div
                key={index}
                className="rental-page-container-owner-stars-star-container"
            >
                <svg
                    className="star-svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="svg-path"
                        d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z"
                        fill="#E3E3E3"
                    />
                </svg>
            </div>
        )
    );
}
export default Stars;
