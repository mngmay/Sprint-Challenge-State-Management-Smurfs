import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const SmurfForm = ({ errors, touched, values, status }) => {
  return (
    <Form className="add-form">
      <Field type="text" name="name" placeholder="Name" />
      {touched.name && errors.name && <p className="error">{errors.name}</p>}

      <Field type="number" name="age" placeholder="Age" />
      {touched.age && errors.age && <p className="age">{errors.age}</p>}

      <Field type="string" name="height" placeholder="Height" />
      {touched.height && errors.height && (
        <p className="height">{errors.height}</p>
      )}

      <button type="submit">Submit</button>
    </Form>
  );
};

const FormikSmurfForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    age: Yup.number().required("Age is required"),
    height: Yup.string().required("Height is required")
  }),

  handleSubmit(values, { props, setStatus, resetForm }) {
    console.log("props", props);
    props.addNewSmurf(values);
    setStatus(values);
    resetForm();
  }
})(SmurfForm);

export default FormikSmurfForm;
