import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import styles from '../../shared//styles/UserForms.module.css'
 
 const Login = (props) => {
  
  // console.log(props)
  const [serverError, setServerError] = React.useState(null);
 
   const formik = useFormik({
     initialValues: {
       username: '',
       password: ''
     },
     validationSchema: Yup.object({
      username: Yup.string()
        // .username('Invalid Username')
        .min(4, 'Must be 4 characters or more')
        .required('Required'),
      password: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
    }),
     onSubmit: values => { props.login(values).then(()=> {
     })},
   });
   return (
     <>
     <h2>Login Form</h2>
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

  export default Login;