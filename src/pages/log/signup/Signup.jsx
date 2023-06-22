import React, { useEffect, useState } from 'react'
import './signup.css'
export default function Signup() {
    const [inputs, setInputs] = useState({
      name: "",
      surname:"",
      mails: "",
      password1: "",
      password2:""

    });

    const inputForms = (e) => {
     
        setInputs({ ...inputs, [e.target.name]: e.target.value });
      
    };

    useEffect(() => {
      if (
        inputs.mails.includes(" ") ||
        inputs.password1.includes(" ") ||
        inputs.password2.includes(" ") ||
        inputs.name.includes(" ") ||
        inputs.surname.includes(" ")
      ) {
        alert("you mustn't use white space!r");
      }
    }, [inputs.mails, inputs.password]);
    return (
      <div className="signup-page">
        <h1 className="signup_h1-title">International Servecies Center</h1>
        <div className="signup-form_contaner">
          <form className="signup-form">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                placeholder="Name"
                className="signup-form_input-1"
                name="name"
                value={inputs.name}
                onChange={inputForms}
              />
              <input
                type="text"
                placeholder="Surname"
                className="signup-form_input-1"
                name="mails"
                value={inputs.surname}
                onChange={inputForms}
              />
              <input
                type="email"
                placeholder="example@email.com"
                className="signup-form_input-1"
                name="mails"
                value={inputs.mails}
                onChange={inputForms}
              />
              <input
                type="text"
                placeholder="password******"
                className="signup-form_input-1"
                name="password1"
                value={inputs.password1}
                onChange={inputForms}
              />
              <input
                type="text"
                placeholder="password******"
                className="signup-form_input-1"
                name="password2"
                value={inputs.password2}
                onChange={inputForms}
              />
            </div>
            <div className="signup-btn_s1">
              <button className="signup-btn_p1">signup with Google</button>
              <button className="signup-btn_p2">Clear</button>
              <button className="signup-btn_p1">signup with... </button>
            </div>
            <div className="signup-btn_s1">
              <button className="signup-btn_cencel">Sign-Up</button>
              <button className="signup-btn_login">signup</button>
            </div>
          </form>
          <div className="signup-ai_contaner-f">
            <p className="signup-ai-contaner"></p>
          </div>
        </div>
      </div>
    );
}
