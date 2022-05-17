import { Link } from 'react-router-dom';
import './../../styles/rentalsection.scss';

function RentalFragment({ title, id, cover }) {
    return (
        <div className="rental-section-fragment">
            <Link to={`/${id}`}>
                <img
                    className="rental-section-fragment-cover"
                    alt="couverture de la location"
                    src={cover}
                />
                <div className="gradient-box"></div>
            </Link>
            <h2 className="rental-section-fragment-title">{title}</h2>
        </div>
    );
}
export default RentalFragment;
