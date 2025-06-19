import { useState } from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import type { AppDispatch } from "app/redux/store";
import { FormComponent } from "shared";
import { createUser } from "modules/user/business/slice.user";
import type { CreateOrUpdateUserRequest } from "modules/user/business/model.user";
import styles from "./_user-info.module.scss";
import { initialValues, userConfig } from "./config.create-user";

interface CreateUserComponentProps {
  show: boolean;
  setShow: (show: boolean) => void;
  [key: string]: any;
}

const CreateUserComponent = (props: CreateUserComponentProps) => {
  const { show, setShow, ...restProps } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<CreateOrUpdateUserRequest>(initialValues);

  const handleClose = () => setShow(false);

  const onChange = (dataForm: Record<string, any>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...dataForm,
    }));
  };

  const handleSubmit = (dataForm: CreateOrUpdateUserRequest) => {
    dispatch(createUser(dataForm));
  };

  return (
    <Offcanvas show={show} {...restProps}>
      <Offcanvas.Header>
        <Offcanvas.Title>Tạo tài khoản mới</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles["user-info"]}>
          <FormComponent
            options={{
              statusOption: [
                { label: "ACTIVATE", value: "ACTIVATE" },
                { label: "DEACTIVATE", value: "DEACTIVATE" },
              ],
              roleOption: [
                { label: "ADMIN", value: "ADMIN" },
                { label: "USER", value: "USER" },
              ],
            }}
            formConfig={userConfig}
            values={formValues}
            onChange={onChange}
            onSubmit={handleSubmit}
            handlers={{
              handleClose,
            }}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CreateUserComponent;
