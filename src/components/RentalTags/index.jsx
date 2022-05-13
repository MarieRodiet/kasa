import './../../styles/rentalpage.scss';

function RentalTags({ tags }) {
    return (
        <div className="rental-page-container-tags-container">
            {tags &&
                tags.length > 0 &&
                tags.map((item) => <span key={item}>TAG</span>)}
        </div>
    );
}

export default RentalTags;
