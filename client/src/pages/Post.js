import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            console.log(response);
            setPostObject(response.data);
        });
    })


    return (
        <div className='postPage'>
            <div className='leftSide'>
                <div className='title'> {postObject.title}</div>
                <div className='postText'> {postObject.postText}</div>
                <div className='footer'> {postObject.username}</div>
            </div>
            <div className='rightSide'>
                <p>Comentários</p>
            </div>

        </div>
    )
}

export default Post;
