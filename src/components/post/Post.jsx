import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/posts/${id}`)
    }
    return (
        <div className='post'>
            <h4>id: {id}</h4>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={`/posts/${id}`} >show details</Link>
            <Link to={`/posts/${id}`}><button>show details</button></Link>
            <button onClick={handleShowDetails}> Details with handler</button>
        </div>
    );
};

export default Post;