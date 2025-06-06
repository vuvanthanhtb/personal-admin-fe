import { FC } from "react";
import { FormComponent } from "shared/components";
import { loginConfig } from "./config";
import styles from "./_login.module.scss";

const Login: FC = () => {
  const handleSubmit = (e: React.FormEvent) => {};

  return (
    <div className={styles["login-container"]}>
      <img src="https://photo.znews.vn/w660/Uploaded/vpibtwvo/2024_03_25/cuc_tinh_y6.jpg" alt="login" />
      <div className={styles["form-login"]}>
        <h1>Login Personal Admin</h1>
        <FormComponent config={loginConfig} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
