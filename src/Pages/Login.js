import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .length(8, "8 chars only")
    .matches(/^[a-zA-Z0-9]+$/, "No white space and special character")
    .required("Required"),
  name: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "No white space and special character")
    .required("Required"),
});

const LoginForm = () => {
  const { user, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = ({ name, password }) => {
    login(name, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1>LOGIN</h1>
        <Formik
          initialValues={{ name: "avinash", password: "12345678" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, errors, isSubmitting }) => {
            return (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field
                    placeholder="avinash"
                    className="form-control"
                    type="text"
                    name="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    placeholder="12345678"
                    type="password"
                    name="password"
                    className="form-control"
                  />
                </div>
                <div className="m-3 form-check">
                  <label className="form-check-label" for="flexRadioDefault1">
                    Remember Me
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!isValid}
                  >
                    Login
                  </button>
                </div>
                <div style={{ margin: "10px" }}>
                  {errors && errors.name && (
                    <div class="alert alert-danger" role="alert">
                      {errors.name}
                    </div>
                  )}
                  {errors && errors.password && (
                    <div class="alert alert-danger" role="alert">
                      {errors.password}
                    </div>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
