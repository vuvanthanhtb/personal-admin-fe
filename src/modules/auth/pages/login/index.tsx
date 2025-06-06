import { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormComponent } from "shared/components";
import type { RootState, AppDispatch } from "app/redux/store";
import { loginConfig, initialValues } from "./config";
import styles from "./_login.module.scss";
import type { LoginRequest } from "../../model.auth";
import { loginUser } from "../../slice.auth";

const Login: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [formValues, setFormValues] = useState<LoginRequest>(initialValues);

  useEffect(() => {
    document.title = "Đăng nhập";
    if (currentUser) {
      navigate("/", { replace: true });
    }
  }, [currentUser, navigate]);

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
      <img
        src="https://photo.znews.vn/w660/Uploaded/vpibtwvo/2024_03_25/cuc_tinh_y6.jpg"
        alt="login"
      />
      <div className={styles["form-login"]}>
        <h1>Login Personal Admin</h1>
        <FormComponent
          config={loginConfig}
          values={formValues}
          onChange={onChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Login;
