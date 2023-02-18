import React from "react";

import styles from "@/styles/Login.module.css";

const Login = () => {
  return (
    <main className={styles.login}>
      <div className={styles.login_title} data-testid="login">
        login
      </div>

      <form
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input placeholder="Email" className={styles.input} />
        <input placeholder="Password" className={styles.input} />

        <button
          type="button"
          title="Submit"
          disabled={true}
          className={styles.btn}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Login;
