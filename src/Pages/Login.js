import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

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
  const { user, login, Error } = useContext(AuthContext);

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
        <h1>Login</h1>

        <Formik
          initialValues={{ name: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {() => {
            return (
              <Form>
                <div style={{ padding: "10px" }}>
                  <label>Name:</label>
                  <Field placeholder="avinash" type="text" name="name" />
                  <div>
                    <ErrorMessage
                      style={{ height: "10px", color: "red" }}
                      name="name"
                      component="div"
                    />
                  </div>
                </div>
                <div>
                  <label>Password:</label>
                  <Field
                    placeholder="12345678"
                    type="password"
                    name="password"
                  />
                  <div>
                    <ErrorMessage
                      style={{ margin: "10px", color: "red" }}
                      name="password"
                      component="div"
                    />
                  </div>
                </div>
                <div>{Error}</div>
                <Button type="submit" style={{ margin: "20px" }}>
                  Login
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default LoginForm;
