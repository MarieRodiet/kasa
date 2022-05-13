import { Link } from 'react-router-dom';
import './../../styles/rentalsection.scss';

function RentalFragment({ title, id }) {
    return (
        <div className="rental-section-fragment">
            <Link to={`/${id}`}>
                <div className="primaryColor-box"></div>
                <div className="gradient-box"></div>
            </Link>
            <h2 className="rental-section-fragment-title">{title}</h2>
        </div>
    );
}
export default RentalFragment;
