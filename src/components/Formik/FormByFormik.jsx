import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';

export default function FormByFormik() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={Yup.object({
          name: Yup.string(),
        })}
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Required';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Invalid email address';
        //   }
        //   return errors;
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="number"
              name="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.number}
            />
            {errors.number && touched.number && errors.number}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
