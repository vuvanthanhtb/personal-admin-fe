import { type FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, BackgroundLogin, FormComponent } from "shared";
import type { RootState, AppDispatch } from "app/redux/store";
import { loginConfig, initialValues } from "./config";
import type { LoginRequest } from "../../business";
import { loginUser } from "../../business";
import styles from "./_login.module.scss";

const Login: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const [formValues, setFormValues] = useState<LoginRequest>(initialValues);

  useEffect(() => {
    document.title = "Đăng nhập";
    if (isLogin) {
      navigate("/", { replace: true });
    }
  }, [isLogin, navigate]);

  const onChange = (data: Record<string, any>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));
  };

  const handleSubmit = (data: LoginRequest) => {
    dispatch(loginUser(data));
  };

  return (
    <div className={styles["login-container"]}>
      <img src={BackgroundLogin} alt="login" />
      <div className={styles["form-login"]}>
        <img className={styles["form-login__image"]} src={Avatar} alt="login" />
        <label className={styles["form-login__title"]}>
          Login Personal Admin
        </label>
        <FormComponent
          formConfig={loginConfig}
          values={formValues}
          onChange={onChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
