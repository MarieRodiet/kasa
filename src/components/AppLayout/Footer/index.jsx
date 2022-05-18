import './../../../styles/AppLayout/footer.scss';
import logo from './../../../assets/logo-footer.png';

function Footer() {
    return (
        <div className="footer-container">
            <img id="logo" src={logo} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}
export default Footer;
