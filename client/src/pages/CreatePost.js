import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

function CreatePost() {

    const [listOfPosts, setListOfPosts] = useState([]);
    console.log(listOfPosts);
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        postText: Yup.string().required("Post text is required"),
        username: Yup.string().min(3).max(15).required("Username is required"),
    });
    const onSubmit = (data, { resetForm }) => {
        axios.post("http://localhost:3001/posts", data).then((response) => {
            setListOfPosts(response.data);
        });
        resetForm();
    };
    return (
        <div className='CreatePostPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer'>
                    <label>Title: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="title"
                        placeholder="(Ex. title)" />
                    <label>Post: </label>
                    <ErrorMessage name="postText" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="postText"
                        placeholder="(Ex. post)" />
                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        autoComplete="off"
                        id="inputCreatePost"
                        name="username"
                        placeholder="(Ex. username)" />

                    <button type='submit' className='Post-Button'>Create Post</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreatePost;
