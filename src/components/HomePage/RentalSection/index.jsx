import { useState, useEffect } from 'react';
import RentalFragment from '../RentalFragment';
import './../../../styles/HomePage/rentalsection.scss';

/**
 *
 * @returns RentalSection
 * fetches data, then loops through data and insert elements into links 
*       <RentalFragment
            key={item.id}
            title={item.title}
            id={item.id}
            cover={item.cover}
        />
 */

function RentalSection() {
    const [data, setData] = useState([]);
    const [isError, setError] = useState(false);
    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch('./../data/data.json', {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                });
                const myJson = await response.json();
                setData(myJson);
            } catch (err) {
                setError(true);
                console.log('there is an error: ' + err);
            } finally {
                console.log('the data is loaded');
            }
        }
        getData();
    }, []);

    if (isError) {
        return <span>Oups, il y a eu un probleme</span>;
    }

    return (
        <div className="rental-section">
            {data &&
                data.length > 0 &&
                data.map((item) => (
                    <RentalFragment
                        key={item.id}
                        title={item.title}
                        id={item.id}
                        cover={item.cover}
                    />
                ))}
        </div>
    );
}

export default RentalSection;
