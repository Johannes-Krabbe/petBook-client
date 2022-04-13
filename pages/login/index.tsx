import { TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { request } from "../../helpers/context";
import { NextPage } from "next";
import React from "react";
import { NavBar } from "../../components/navBar";

const Login: NextPage = () => {
  const [loginMessage, setLoginMessage] = React.useState("");

  const login = (username: string, password: string) => {
    request
      .post("/user/login", { username, password })
      .then((response) => {
        if (response.status === 200) {
          document.cookie = `pb_jwt=${response.data.token};max-age=${
            60 * 60 * 24 * 30
          }`;
          setLoginMessage("");
        }
      })
      .catch((e) => {
        setLoginMessage(e.response.data.message);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="font-sans grid place-items-center h-screen bg-gray-900">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(arg) => {
            login(arg.username, arg.password);
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <div className="flex flex-col">
                <div className="flex flex-col items-center">
                  <div className="mb-3 items-center">
                    <TextField
                      name="username"
                      label="Username"
                      variant="outlined"
                      onChange={handleChange}
                    ></TextField>
                  </div>
                  <div className="mb-1 items-center">
                    <TextField
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onChange={handleChange}
                    ></TextField>
                  </div>
                </div>
                <p className="h-5 mb-1 text-red-600 text-s text-center">
                  {loginMessage}
                </p>
                <Button type="submit">Login</Button>
                <div className="items-center"></div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
