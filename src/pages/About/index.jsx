import bgPicture from './../../assets/about-bg-picture.png';
import './../../styles/HomePage/picturesection.scss';
import AboutSection from '../../components/AboutPage/AboutSection';

function About() {
    return (
        <div>
            <section className="img-box">
                <div className="black-bg">
                    <img src={bgPicture} alt="" />
                </div>
            </section>
            <AboutSection />
        </div>
    );
}
export default About;
