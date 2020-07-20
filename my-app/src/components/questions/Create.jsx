import React from "react";
import { useFormik } from 'formik';
import postService from '../../services/postService';
 
 const CreateQuestion = (props) => {
  
  // const login = props;
  // console.log(props)

   const formik = useFormik({
     initialValues: {
         description: ""
    //    question: '',
    //    answerA: '',
    //    answerB: '',
    //    answerC: '',
    //    answerD: ''
     },
     onSubmit: values => {
        postService.create(values).then(() => {
            console.log("done")
        //   history.push('/login')
        })
     }
   });
   return (
     <form onSubmit={formik.handleSubmit}>
         <label htmlFor="description">Description</label>
       <input
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
       />
       {/* <label htmlFor="question">Question</label>
       <input
         id="question"
         name="question"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.question}
       />
       <label htmlFor="answerA">Answer A</label>
       <input
         id="answerA"
         name="answerA"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answerA}
       />
       <label htmlFor="answerB">Answer B</label>
       <input
         id="answerB"
         name="answerB"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answerB}
       />
       <label htmlFor="answerC">Answer C</label>
       <input
         id="answerC"
         name="answerC"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answerC}
       />
       <label htmlFor="answerD">Answer D</label>
       <input
         id="answerD"
         name="answerD"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answerD}
       /> */}
       <button type="submit">Submit</button>
     </form>
   );
 };

  export default CreateQuestion;