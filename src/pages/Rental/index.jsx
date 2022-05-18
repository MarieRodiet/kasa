import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './../../styles/RentalPage/rentalpage.scss';
import RentalContent from '../../components/RentalPage/RentalContent';

function Rental() {
    const { id } = useParams();
    const [isError, setError] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        async function getRental() {
            try {
                const response = await fetch('./../data/data.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
                const myJson = await response.json();
                setData(myJson.find((element) => element.id === id));
            } catch (err) {
                setError(true);
            } finally {
                console.log("the data is loaded")
            }
        }
        getRental();
    }, []);

    if (isError) {
        return <span>Oups, il y a eu un probleme</span>;
    }
    return <RentalContent data={data} />;
}

export default Rental;
