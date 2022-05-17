function Equipments({ equipments }) {
    return (
        <ul>
            {equipments &&
                equipments.length > 0 &&
                equipments.map((element) => <li key={element}>{element} </li>)}
        </ul>
    );
}
export default Equipments;
