import logo from './../../../assets/logo.png';
import './../../../styles/AppLayout/header.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

/**
 * 
 * @returns Header
 */
function Header() {
    const location = useLocation();
    return (
        <div className="Banner">
            <img id="logo" src={logo} alt="logo Kasa" />
            <nav className="links">
                <Link
                    to="/"
                    className={
                        location.pathname === '/'
                            ? 'accueil-visited'
                            : 'accueil-link'
                    }
                >
                    ACCUEIL
                </Link>
                <Link
                    to="/about"
                    className={
                        location.pathname === '/about'
                            ? 'about-visited'
                            : 'about-link'
                    }
                >
                    A PROPOS
                </Link>
            </nav>
        </div>
    );
}

export default Header;
