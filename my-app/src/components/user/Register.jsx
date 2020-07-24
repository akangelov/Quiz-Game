import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import userService from '../../services/userService';
import { useHistory } from 'react-router'
import styles from '../../shared//styles/UserForms.module.css'
 
 const Register = (props) => {
  let history = useHistory();
   
   const formik = useFormik({
     initialValues: {
       username: '',
       password: ''
     },
     validationSchema: Yup.object({
      username: Yup.string()
        .min(4, 'Must be 3 characters or more')
        .required('Required'),
      password: Yup.string()
        .min(4, 'Must be 20 characters or more')
        .required('Required'),
    }),
     onSubmit: values => {
      userService.register(values).then(() => {
        history.push('/login')
      });
    },
   });
   
   return (
     <>
     <h2>Register Form</h2>
     <form onSubmit={formik.handleSubmit}>
     <div className={styles.container}>
       <label htmlFor="username">Username</label>
       <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.username}
       />
       {formik.touched.username && formik.errors.username ? (
         <div>{formik.errors.username}</div>
       ) : null}
       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       {formik.touched.password && formik.errors.password ? (
         <div>{formik.errors.password}</div>
       ) : null}
       <button type="submit">Submit</button>
       </div>
     </form>
     </>
   );
 };

  export default Register;