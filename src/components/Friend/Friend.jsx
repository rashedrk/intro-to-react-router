import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, phone, website, email} = friend;
    return (
        <div className='friend'>
            <h4>{name}</h4>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p><Link to={`/friendDetails/${id}`}>show details</Link></p>
        </div>
    );
};

export default Friend;