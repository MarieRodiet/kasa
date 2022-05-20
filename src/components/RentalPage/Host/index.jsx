/**
 * 
 * @param {object} host 
 * @returns <Host host={data.host} /> with {string} name and {string} picture
 */
function Host({ host }) {
    return (
        <div className="rental-page-container-owner-info">
            <p className="rental-page-container-owner-info-name">{host.name}</p>
            <img
                className="rental-page-container-owner-info-picture"
                src={host.picture}
                alt="host"
            />
        </div>
    );
}
export default Host;
