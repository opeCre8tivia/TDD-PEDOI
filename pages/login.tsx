import React, { useState } from "react";
import styles from "@/styles/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className={styles.login}>
      <form>
        <input
          style={styling.input}
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={styling.input}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={styling.button}
          type="submit"
          disabled={!email || !password}
        >
          Submit
        </button>
      </form>
    </main>
  );
};

export default Login;

const styling = {
  input: {
    width: "150px",
    height: "54px",
    borderRadius: "6px",
    border: "1px solid #7a7a7a",
    padding: "4px",
    margin: "4px",
  },
  button: {
    width: "150px",
    height: "54px",
    borderRadius: "6px",
    border: "1px solid #7a7a7a",
    padding: "4px",
    margin: "4px",
    background: "green",
    color: "#fff",
  },
};
