import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const {id, title, body} = useLoaderData();
    const navigate = useNavigate();
    const handleGoback = () => {
        navigate(-1);
    }
    return (
        <div>
            <h3>{id}</h3>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleGoback}>Go back</button>
        </div>
    );
};

export default PostDetails;