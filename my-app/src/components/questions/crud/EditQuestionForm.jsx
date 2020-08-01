import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from 'react-router'
import styles from './CrudQuestion.module.css'
 
const EditDelQuestionForm = (props) => {

    let history = useHistory();
    const id = props._id

    const editPost = (data) => {
        return fetch(`http://localhost:9999/api/origami/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
        })
    }

const formik = useFormik({
    initialValues: {
        category: `${props.category}`,
        question: `${props.question}`,
        answerA: `${props.answerA}`,
        answerB: `${props.answerB}`,
        answerC: `${props.answerC}`,
        answerD: `${props.answerD}`,
        correctAnswer: `${props.correctAnswer}`,
    },
    validationSchema: Yup.object({
        category: Yup.string()
            .min(3, 'Must be 3 characters or more')
            .required('Required'),
        question: Yup.string()
            .min(10, 'Must be 10 characters or more')
            .required('Required'),
        answerA: Yup.string()
            .required('Required'),
        answerB: Yup.string()
            .required('Required'),
        answerC: Yup.string()
            .required('Required'),
        answerD: Yup.string()
            .required('Required'),
        correctAnswer: Yup.string()
            .required('Required'),
    }),
    onSubmit: values => {
        console.log(values)
        editPost(values).then(() => {
            history.push('/all')
            toast("Question editted!")
        })
    }
});
   
return (
    <>
    <form onSubmit={formik.handleSubmit} >
        <div className={styles.containerOne}>
            <label className={styles.label} htmlFor="category">Category</label>
       <input
            className={styles.item}
            id="category"
            name="category"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.category}
       />
       {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
       ) : null}
       <label className={styles.label} htmlFor="question">Question</label>
       <input
            className={styles.item}
            id="question"
            name="question"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.question}
       />
       {formik.touched.question && formik.errors.question ? (
            <div>{formik.errors.question}</div>
       ) : null}
        </div>
        <div className={styles.containerTwo}>
       <label className={styles.label} htmlFor="answerA">Answer A</label>
       <input
            className={styles.item}
            id="answerA"
            name="answerA"
            type="text"
            placeholder={props.answerA}
            onChange={formik.handleChange}
            value={formik.values.answerA}
       />
       {formik.touched.answerA && formik.errors.answerA ? (
            <div>{formik.errors.answerA}</div>
       ) : null}
       <label className={styles.label} htmlFor="answerB">Answer B</label>
       <input
            className={styles.item}
            id="answerB"
            name="answerB"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.answerB}
       />
       {formik.touched.answerB && formik.errors.answerB ? (
            <div>{formik.errors.answerB}</div>
       ) : null}
       <label className={styles.label} htmlFor="answerC">Answer C</label>
       <input
            className={styles.item}
            id="answerC"
            name="answerC"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.answerC}
       />
        {formik.touched.answerC && formik.errors.answerC ? (
            <div>{formik.errors.answerC}</div>
        ) : null}
        <label className={styles.label} htmlFor="answerD">Answer D</label>
        <input
            className={styles.item}
            id="answerD"
            name="answerD"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.answerD}
        />
        {formik.touched.answerD && formik.errors.answerD ? (
            <div>{formik.errors.answerD}</div>
        ) : null}
         <label className={styles.label} htmlFor="correctAnswer">Correct Answer</label>
        <input
            className={styles.item}
            id="correctAnswer"
            name="correctAnswer"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.correctAnswer}
        />
        {formik.touched.correctAnswer && formik.errors.correctAnswer ? (
            <div>{formik.errors.correctAnswer}</div>
        ) : null}
        </div>
        <button className={styles.button} type="submit">Edit</button>
       
    </form>
    <ToastContainer /> 
    </>
    );
};

export default EditDelQuestionForm;