import React from 'react'

export default function Log() {
  const log_header = <h1>International Services Center</h1>;
  return (
    <>
      <div className="login">
        {log_header}
        <section>
          <form>
            <input type="text" placeholder="User name" />
            <input type="password" placeholder="Password" />
          </form>
        </section>
      </div>
      {/* <div className="signup">{log_header}</div> */}
    </>
  );
}
