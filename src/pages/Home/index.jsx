import bgPicture from './../../assets/home-bg-picture.png';
import './../../styles/picturesection.scss';

function Home() {
    return (
        <div >
            <section className="img-box">
                <div className="black-bg">
                    <img src={bgPicture} alt="" />
                </div>
                <h1>Chez vous, partout et ailleurs</h1>
            </section>
            
        </div>
    );
}

export default Home;
//<h1>Page d'accueil 🏡</h1>