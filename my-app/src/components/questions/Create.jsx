import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router'
import styles from './Create.module.css'
import postService from '../../services/postService';
 
 const CreateQuestion = (props) => {
  let history = useHistory();
  
   const formik = useFormik({
     initialValues: {
       category: "",
       question: '',
       answerA: '',
       answerB: '',
       answerC: '',
       answerD: '',
       correctAnswer: '',
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
        postService.create(values).then(() => {
          history.push('/')
        })
     }
   });
   return (
     <form onSubmit={formik.handleSubmit} >
       <div className={styles.container}>
         <label htmlFor="category">Category</label>
       <input
         id="category"
         name="category"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.category}
       />
       {formik.touched.category && formik.errors.category ? (
         <div>{formik.errors.category}</div>
       ) : null}
       <label htmlFor="question">Question</label>
       <input
         id="question"
         name="question"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.question}
       />
       {formik.touched.question && formik.errors.question ? (
         <div>{formik.errors.question}</div>
       ) : null}
       <label htmlFor="answerA">Answer A</label>
       <input
         id="answerA"
         name="answerA"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answerA}
       />
       {formik.touched.answerA && formik.errors.answerA ? (
         <div>{formik.errors.answerA}</div>
       ) : null}
       <label htmlFor="answerB">Answer B</label>
       <input
         id="answerB"
         name="answerB"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answerB}
       />
       {formik.touched.answerB && formik.errors.answerB ? (
         <div>{formik.errors.answerB}</div>
       ) : null}
       <label htmlFor="answerC">Answer C</label>
       <input
         id="answerC"
         name="answerC"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answerC}
       />
       {formik.touched.answerC && formik.errors.answerC ? (
         <div>{formik.errors.answerC}</div>
       ) : null}
       <label htmlFor="answerD">Answer D</label>
       <input
         id="answerD"
         name="answerD"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answerD}
       />
       {formik.touched.answerD && formik.errors.answerD ? (
         <div>{formik.errors.answerD}</div>
       ) : null}
        <label htmlFor="correctAnswer">Correct Answer</label>
       <input
         id="correctAnswer"
         name="correctAnswer"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.correctAnswer}
       />
       {formik.touched.correctAnswer && formik.errors.correctAnswer ? (
         <div>{formik.errors.correctAnswer}</div>
       ) : null}
       <button type="submit">Submit</button>
     </div>
     </form>
   );
 };

  export default CreateQuestion;