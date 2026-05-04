"use client";
import styles from "./page.module.css";
import Link from "next/link";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const userSchema = yup.object().shape({
  username: yup
    .string()
    .required("აუცილებელია იუზერნეიმის შევსება")
    .min(4, "მინიმუმ 4 სიმბოლო")
    .max(10, "მაქსიმუმ 10 სიმბოლო"),
  email: yup
    .string()
    .required("მეილის შევსება აუცილებელია")
    .email("მეილის არასწორი ფორმატი"),
  password: yup
    .string()
    .required("პაროლის შევსება აუცილებელია")
    .min(6, "მინიმუმ 6 სიმბოლო")
    .max(10, "მაქსიმუმ 10 სიმბოლო"),
});

function page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(userSchema) });

  const handleRegister = async (data) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result?.id) {
        reset();
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Register | Add New User</h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className={styles.inputWrapper}>
          <label>Username: </label>
          <br />
          <input
            {...register("username")}
            className={styles.input}
            placeholder="username"
          />
          {errors.username && (
            <p className={styles.error}>{errors.username.message}</p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <label>Email: </label>
          <br />
          <input
            {...register("email")}
            className={styles.input}
            placeholder="email"
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputWrapper}>
          <label>Password: </label>
          <br />
          <input
            {...register("password")}
            className={styles.input}
            placeholder="password"
            type="password"
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Sign up
        </button>
      </form>
      <Link href={"/login"}>
        <button className={styles.notResgitered}>
          Already Registered? log in
        </button>
      </Link>
    </div>
  );
}

export default page;
