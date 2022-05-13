import { Link } from 'react-router-dom';
import './../../styles/rentalsection.scss';

function RentalFragment({ title, id }) {
    return (
        <div className="rental-section-fragment">
            <Link to={`/${id}`}>
                <h2>{title}</h2>
                <div className="primaryColor-box"></div>
            </Link>
        </div>
    );
}
export default RentalFragment;
