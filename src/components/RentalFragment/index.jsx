import { Link } from 'react-router-dom';
import './../../styles/rentalsection.scss';
import { useLocation } from 'react-router-dom';

function RentalFragment({ title, id }) {
    const location = useLocation();
    console.log(location);
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
