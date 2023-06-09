import React, { useEffect, useState } from "react";
import "./login.css";
export default function Login() {
  const [inputs, setInputs] = useState({
    mails: "",
    password: "",
  });

  const inputForms = (e) => {
    if (e.key !== "blank space") {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (inputs.mails.includes(" ") || inputs.password.includes(" ")) {
      alert("you mustn't use white space!r");
    }
  }, [inputs.mails, inputs.password]);
  return (
    <div className="login-page">
      <h1 className="login_h1-title">International Servecies Center</h1>
      <div className="login-form_contaner">
        <form className="login-form">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              type="email"
              placeholder="example@email.com"
              className="login-form_input-1"
              name="mails"
              value={inputs.mails}
              onChange={inputForms}
            />
            <input
              type="password"
              placeholder="password******"
              className="login-form_input-1"
              name="password"
              value={inputs.password}
              onChange={inputForms}
            />
          </div>
          <div className="login-btn_s1">
            <button className="login-btn_p1">Login with Google</button>
            <button className="login-btn_p2">Clear</button>
            <button className="login-btn_p1">Login with... </button>
          </div>
          <div className="login-btn_s1">
            <button className="login-btn_cencel">Sign-Up</button>
            <button className="login-btn_login">Login</button>
          </div>
        </form>
        <div className="login-ai_contaner-f">
          <p className="login-ai-contaner"></p>
        </div>
      </div>
    </div>
  );
}
