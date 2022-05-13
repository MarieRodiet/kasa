import './../../styles/rentalpage.scss';

function RentalTags({ tags }) {
    return (
        <div className="rental-page-container-tags-container">
            {tags &&
                tags.length > 0 &&
                tags.map((item) => <div className="tag" key={item}>{item}</div>)}
        </div>
    );
}

export default RentalTags;
