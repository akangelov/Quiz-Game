import React from "react";
import { useFormik } from 'formik';
import userService from '../../services/userService';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router'
 
 const Register = (props) => {
  let history = useHistory();
  //  console.log(props)
   
   const formik = useFormik({
     initialValues: {
       username: '',
       password: ''
     },
     onSubmit: values => {
      userService.register(values).then(() => {
        history.push('/login')
      });
    },
   });
   
   return (
    <withRouter>
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
     </withRouter>
   );
 };

  export default Register;