import React, { useState } from "react";
import "./log.css";
export default function Log() {
  const [logwinds, setLogwinds] = useState({
    login: true,
    signup: false,
  });

  const [infos, setInfos] = useState({
    name: null,
    surname: null,
    age: null,
    password: null,
    username: null,
  });
   const [info, setIn] = useState({
     password: null,
     username: null,
   });

  const handdilchange = (e) => {
  setInfos({...infos, [e.target.name]:e.target.value})
  }
   const hanilchange = (e) => {
     setIn({ ...info, [e.target.name]: e.target.value });
   };

  const gotoLoing = (e) => {
    if (e.target.name === "log01") {
      setLogwinds({
        ...logwinds,
        login: true,
        signup: false,
      });
    } else {
      setLogwinds({
        ...logwinds,
        login: false,
        signup: true,
      });
    }
  };
  const loginMaker = () => {
    if (infos.username === info.username && infos.password === info.password) {
      alert("You logged in")
    } else {
      alert("there is something wrong")
      console.log(infos.username);
      console.log(info.username);
      console.log(infos.password);
      console.log(info.password);
    }
  }
  const log_header = (
    <h1 className="log-main-header">International Services Center</h1>
  );
  return (
    <>
      {logwinds.login && (
        <div className="login">
          {log_header}
          <section className="login-section-f1">
            <form className="login01-section">
              <input
                type="text"
                placeholder="User name"
                name="username"
                onChange={(e) => hanilchange(e)}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => hanilchange(e)}
              />
              <section className="login-btns-f1">
                <button type="reset">Cancel</button>
                <button type="button">Login with Google</button>
                <button type="button" onClick={loginMaker}>
                  Login
                </button>
              </section>
              <section className="login-btns-f1">
                <button type="button">Help</button>
                <button type="button" name="log2" onClick={(e) => gotoLoing(e)}>
                  Sign up
                </button>
              </section>
            </form>
            <section className="login-second-section01">
              <div className="helper-Ai01">Helper AI</div>
              <div className="backside"></div>
            </section>
          </section>
        </div>
      )}
      {logwinds.signup && (
        <div className="signup">
          {log_header}

          <section className="login-section-f1">
            <form className="login02-section">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => handdilchange(e)}
                required
              />
              <input
                type="text"
                placeholder="Surname"
                name="surname"
                onChange={(e) => handdilchange(e)}
                required
              />
              <input
                type="Number"
                placeholder="Age:"
                name="age"
                onChange={(e) => handdilchange(e)}
                required
              />
              <input
                type="text"
                placeholder="User name"
                name="username"
                onChange={(e) => handdilchange(e)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handdilchange(e)}
                required
              />
              <section className="login-btns-f1">
                <button type="reset">Cancel</button>
                <button type="button">Clear last</button>
                <button
                  type="button"
                  name="log01"
                  onClick={(e) => gotoLoing(e)}
                >
                  Go to Login
                </button>
              </section>
              <section className="login-btns-f1">
                <button type="button">Help</button>
                <button type="submit">Submit</button>
              </section>
            </form>
            <section className="login-second-section01">
              <div className="helper-Ai01">Helper AI</div>
              <div className="backside"></div>
            </section>
          </section>
        </div>
      )}
    </>
  );
}
