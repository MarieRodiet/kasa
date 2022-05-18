import { Link } from 'react-router-dom';
import './../../styles/ErrorPage/error.scss';

function Error() {
    return (
        <div className="error">
            <h1 className="error-code">404</h1>
            <h2 className="error-description">
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <div className="error-link-home">
                <Link to="/">Retournez sur la page d'accueil</Link>
            </div>
        </div>
    );
}

export default Error;
