import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CreateTask() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(15).required()
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='CreateTaskPage'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='formContainer'>
                    <label>Title: </label>
                    <ErrorMessage name='title' component="span"/>
                    <Field
                        autocomplete="off"
                        id="inputCreateTask"
                        name="title"
                        placeholder="(Ex. Title)"
                    />
                    <label>Post: </label>
                    <ErrorMessage name='postText' component="span"/>
                    <Field
                        autocomplete="off"
                        id="inputCreateTask"
                        name="postText"
                        placeholder="(Ex. Post)"
                    />
                    <label>Username: </label>
                    <ErrorMessage name='username' component="span"/>
                    <Field
                        autocomplete="off"
                        id="inputCreateTask"
                        name="username"
                        placeholder="(Ex. Erick)"
                    />

                    <button type='submit'>create Task</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CreateTask;
