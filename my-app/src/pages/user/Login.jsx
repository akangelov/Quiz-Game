import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from '../../shared//styles/UserForms.module.css'
 
const Login = (props) => {

const formik = useFormik({
    initialValues: {
        username:"", 
        password:""
    },
    validationSchema: Yup.object({
    username: Yup.string()
        .min(4, 'Must be 4 characters or more')
        .required('Required'),
    password: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .required('Required'),
 }),
  onSubmit: values => { props.login(values)}
});
    return (
        <>
        <h2>Login Form</h2>
        <div className={styles.container}>
        <form onSubmit={formik.handleSubmit} >
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
        </form>
        </div>
        </>
    );
};

export default Login;