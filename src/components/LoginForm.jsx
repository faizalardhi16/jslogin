import React from "react";
import { Text } from "./Text";
import { Input } from "./Input";

const LoginForm = (props) => {
  const login = (e) => {
    e.preventDefault();

    localStorage.setItem("user", "Login");

    alert("Berhasil Login");
  };

  return (
    <div className="bg-rose-600 w-5/12 h-96 rounded-lg py-4 flex flex-col items-center justify-center">
      <Text>Login Form</Text>

      <Input
        placeholder="Please enter your email"
        type="email"
        className="w-3/4 mt-4 p-2"
        required
      />

      <Input
        placeholder="Password"
        type="password"
        className="w-3/4 mt-4 p-2"
      />

      <button onClick={login} className="w-3/4 mt-4 p-2 bg-green-600">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
