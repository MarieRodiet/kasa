import bgPicture from './../../assets/about-bg-picture.png';
import './../../styles/picturesection.scss';

function About() {
    return (
        <div>
            <section className="img-box">
                <div className="black-bg">
                    <img src={bgPicture} alt="" />
                </div>

            </section>
        </div>
    );
}
export default About;
