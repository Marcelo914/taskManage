import React from "react";
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
        })
    }, [])
    return (
        <div className="App">
            {listOfPosts.map((value, key) => {
                return (
                    <div className="post" key={key}>
                        <div className="post-header">
                            <div className="title">{value.title}</div>
                            <div className="subtitle">{value.subtitle}</div>
                        </div>
                        <div className="post-body">{value.postText}</div>
                        <div className="post-footer">
                            <div className="username">{value.username}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Home;


