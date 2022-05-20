import { Link } from 'react-router-dom';
import './../../../styles/HomePage/rentalsection.scss';

/**
 * @param {string} title 
 * @param {number} id
 * @param {string} cover 
 * @returns  <RentalFragment
                key={item.id}
                title={item.title}
                id={item.id}
                cover={item.cover}   
                />
 */
function RentalFragment({ title, id, cover }) {
    return (
        <div className="rental-section-fragment">
            <Link to={`/rental/${id}`}>
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
