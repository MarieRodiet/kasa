import logo from './../../assets/logo.png';
import './../../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Banner">
            <img id="logo" src={logo} alt="logo Kasa" />
            <nav className="links">
                <Link to="/" className="accueil-link">
                    ACCUEIL
                </Link>
                <Link to="/about" className="about-link">
                    A PROPOS
                </Link>
            </nav>
        </div>
    );
}
export default Header;
