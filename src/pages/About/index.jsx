import bgPicture from './../../assets/about-bg-picture.png';
import Collapse from './../../components/AppLayout/Collapse';
import './../../styles/AppLayout/collapse.scss';
import './../../styles/HomePage/picturesection.scss';
import './../../styles/RentalPage/rentalpage.scss';


function About() {
    const aboutInfo = [
        {
            title: 'Fiabilié',
            description:
                'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        },
        {
            title: 'Respect',
            description:
                'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            title: 'Service',
            description:
                "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            title: 'Sécurité',
            description:
                "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];
    return (
        <div>
            <section className="img-box">
                <div className="black-bg">
                    <img src={bgPicture} alt="" />
                </div>
            </section>
            <div className="about">
                {aboutInfo.map((element) => (
                    <Collapse
                        title={element.title}
                        description={element.description}
                        key={element.title}
                        isList={false}
                    />
                ))}
            </div>
        </div>
    );
}
export default About;
