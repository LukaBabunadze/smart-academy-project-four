"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    // e იგივეა რაც event
    e.preventDefault();
    if (username.length === 0) {
      return setSubmitError("იუზერნეიმის შეყვანა აუცილებელია");
    }

    if (password.length === 0) {
      return setSubmitError("პაროლის შეყვანა აუცილებელია");
    }

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });

      const result = await response.json();
      if (result?.token) {
        router.push("/");
      }
    } catch (error) {
      setSubmitError("მოხდა შეცდომა");
      console.error("this is error", error);
    }
  };
  return (
    <div className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h3 className={styles.signin}>Sign In</h3>
        <p className={styles.desc}>please sign in to access market.</p>

        <input
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          className={styles.input}
        />

        <input
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
          type={passwordVisible ? "text" : "password"}
          className={styles.input}
          value={"m38rmF$"}
        />

        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          see password
        </button>

        <button type="submit" className={styles.button}>
          Log In
        </button>
        {submitError.length > 0 ? (
          <div className={styles.error}>{submitError}</div>
        ) : null}
        <Link href={"/register"}>
          <button className={styles.notRegistered}>
            Don't have an account? Register
          </button>
        </Link>
      </form>
    </div>
  );
}

export default page;
