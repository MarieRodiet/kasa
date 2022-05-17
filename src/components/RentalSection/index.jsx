import { useState, useEffect } from 'react';
import RentalFragment from './../RentalFragment';
import './../../styles/rentalsection.scss';
function RentalSection() {
    const [data, setData] = useState([]);
    function getData () {
        fetch('./../data/data.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    };

    useEffect(() => {
        getData();
    }, []);

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
