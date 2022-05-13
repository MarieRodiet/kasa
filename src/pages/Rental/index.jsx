import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Rental() {
    const { id } = useParams();
    const [rental, setRental] = useState([]);
    const getRental = () => {
        fetch('./../data/data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let found = data.find((element) => element.id === id);
                setRental(found);
            });
    };
    useEffect(() => {
        getRental();
    }, [])

    console.log(rental);
    return (
        <div>
            <h1>Rental PAGE!</h1>
            <h2>{id}</h2>
        </div>
    );
}

export default Rental;
