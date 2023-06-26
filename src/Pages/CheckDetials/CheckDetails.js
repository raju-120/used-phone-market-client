import React from 'react';
import { useLoaderData } from 'react-router-dom'

const CheckDetails = () => {
    const {_id, name} = useLoaderData();
    return (
        <div>
            <h1>Baal</h1>
            <h1>{name}</h1>
            
        </div>
    );
};

export default CheckDetails;