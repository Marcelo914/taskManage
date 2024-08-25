import React from 'react';
import { Formik, Form, Field } from 'formik';

function CreatePost() {
    return (
        <div className='CreatePostPage'>
            <Formik>
                <Form className='formContainer'>
                    <label>Title: </label>
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="title"
                        placeholder="(Ex. title)" />
                    <label>Post: </label>
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="postText"
                        placeholder="(Ex. post)" />
                    <label>Username: </label>
                    <Field
                        autocomplete="off"
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
