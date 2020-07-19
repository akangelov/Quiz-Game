import React from "react";
import { useFormik } from 'formik';
import userService from '../../services/userService';
import { useHistory } from 'react-router-dom';
 
 const Login = () => {
  let history = useHistory();

   const formik = useFormik({
     initialValues: {
       username: '',
       password: ''
     },
     onSubmit: values => {
      userService.login(values).then(() => {
        history.push("/");
      });
    },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="username">Username</label>
       <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.username}
       />
       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       <button type="submit">Submit</button>
     </form>
   );
 };

  export default Login;