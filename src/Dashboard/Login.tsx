import React from "react";
import { useForm } from "react-hook-form";
import { userValidation } from "../ValidationData/UserValidation.tsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  //   const navigate = useNavigate();

  const isValidUser = (email, password) => {
    return userValidation[email] === password;
  };
  const navigate = useNavigate();

  function navigateToDashboard() {
    navigate("/dashboard");
  }

  const onSubmit = (data) => {
    if (isValidUser(data.email, data.password)) {
      navigateToDashboard();
    } else alert("Invalid Creds");
  };

  return (
    <>
      <form
        style={{ position: "absolute", top: "34%", left: "40%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ textAlign: "left" }}>
            <label>Email</label>
          </div>
          <input
            style={{
              marginTop: "0.5rem",
              width: "21rem",
              height: "3rem",
              borderRadius: "0.5rem",
              borderWidth: "thin",
            }}
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter your email"
          ></input>
        </div>
        <div>
          <div style={{ textAlign: "left" }}>
            <label>Password</label>
          </div>
          <input
            {...register("password", { required: true })}
            style={{
              borderColor: "#e9e4e4",
              marginTop: "0.5rem",
              width: "21rem",
              height: "3rem",
              borderRadius: "0.5rem",
              borderWidth: "thin",
            }}
            type="password"
            placeholder="Enter your password"
          ></input>
          <div>
            <button
              style={{
                width: "21rem",
                height: "3rem",
                marginTop: "1rem",
                borderRadius: "0.5rem",
                backgroundColor: "#ae91e1",
                color: "white",
                border: 0,
                fontSize: "1.2rem",
                fontWeight: 600,
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
