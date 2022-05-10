import logo from './../assets/logo.png';
import './../styles/Banner.scss';

function Banner() {
    return (
        <div className="Banner">
            <img id="logo" src={logo} alt="logo Kasa" />
            <nav className="links">
                <a href="https://google.com" to="/" className="accueil-link">
                    ACCUEIL
                </a>
                <a href="https://google.com" to="/" className="about-link">
                    A PROPOS
                </a>
            </nav>
        </div>
    );
}
export default Banner;
