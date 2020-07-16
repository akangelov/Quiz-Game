import React from "react";
import { useFormik } from 'formik';
import userService from '../../services/userService';

 
 const Register = () => {
   // Notice that we have to initialize ALL of fields with values. These
   // could come from props, but since we don't want to prefill this form,
   // we just use an empty string. If you don't do this, React will yell
   // at you.
   const formik = useFormik({
     initialValues: {
       username: '',
       password: ''
     },
    //  onSubmit: values => {
    //    alert(JSON.stringify(values, null, 2));
    //  },
     onSubmit: values => {
      userService.register(values).then(() => {
        console.log("done")
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
       {/* <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       /> */}
       <button type="submit">Submit</button>
     </form>
   );
 };

  export default Register;