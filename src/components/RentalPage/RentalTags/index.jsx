import './../../../styles/RentalPage/rentalpage.scss';

/**
 * 
 * @param {object} tags
 * @returns list of <RentalTags tags={data.tags} /> from array of strings
 */
function RentalTags({ tags }) {
    return (
        <div className="rental-page-container-info-tags">
            {tags &&
                tags.length > 0 &&
                tags.map((item) => (
                    <div className="tag" key={item}>
                        {item}
                    </div>
                ))}
        </div>
    );
}

export default RentalTags;
