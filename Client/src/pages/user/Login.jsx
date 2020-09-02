import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './UserForms.module.css'
 
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
        .min(4, 'Must be 4 characters or more')
        .required('Required'),
 }),
  onSubmit: values => { props.login(values)}
});
    return (
        <>
        <h2 className={styles.h2}>Login Form</h2>
        <div className={styles.container}>
        <form onSubmit={formik.handleSubmit} >
            <label className={styles.label} htmlFor="username">Username</label>
            <input
                className={styles.input}              
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
            <label className={styles.label} htmlFor="password">Password</label>
            <input
                className={styles.input} 
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <button className={styles.button}  type="submit">Submit</button>
        </form>
        </div>
        </>
    );
};

export default Login;