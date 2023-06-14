// import { useState } from "react";
import "./Signup.css";
// import "./App.css";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

// const [firstName, setFirstName] = useState("");
// const [firstName, setFirstName] = useState("");
// const [firstName, setFirstName] = useState("");

function Signup() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "must be 15 character or less")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <form className="card" onSubmit={formik.handleSubmit}>
      <div className="input-container mx-3 mt-4">
        <input
          id="username"
          name="username"
          placeholder="Username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <p>{formik.errors.username}</p>
        )}
      </div>

      <div className="input-container mx-3 my-4">
        <input
          id="passwrord"
          name="password"
          placeholder="Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
      </div>
      <button className="btn btn-danger mb-4" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Signup;
