import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const {name,phone,email,address} = useLoaderData();
    
    return (
        <div>
            <h2> everything about the friend is here</h2>
            <h3>{name}</h3>
            <p>{address.street}</p>
            <p>{phone}</p>
            <p>{email}</p>
        </div>
    );
};

export default FriendDetail;