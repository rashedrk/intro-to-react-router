import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <h5>This is my Friends:{data. length}</h5>
            {
                data.map( friend => <Friend
                    key={friend.key}
                    friend = {friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends; 