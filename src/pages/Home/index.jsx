import bgPicture from './../../assets/home-bg-picture.png';
import './../../styles/HomePage/picturesection.scss';
import RentalSection from '../../components/HomePage/RentalSection';

/**
 * 
 * @returns ACCUEIL page
 */
function Home() {
    return (
        <div>
            <section className="img-box">
                <div className="black-bg">
                    <img src={bgPicture} alt="" />
                </div>
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
            <RentalSection className="rentals"></RentalSection>

        </div>
    );
}

export default Home;
