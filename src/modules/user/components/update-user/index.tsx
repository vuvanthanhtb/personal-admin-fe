import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import type { AppDispatch } from "app/redux/store";
import { FormComponent } from "shared";
import { updateUser } from "modules/user/business/slice.user";
import type { CreateOrUpdateUserRequest } from "modules/user/business/model.user";
import styles from "./_user-info.module.scss";
import { initialValues, userConfig } from "./config.update-user";

interface UpdateUserComponentProps {
  show: boolean;
  setShow: (show: boolean) => void;
  data: any;
  [key: string]: any;
}

const UpdateUserComponent = (props: UpdateUserComponentProps) => {
  const { show, setShow, data, ...restProps } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<CreateOrUpdateUserRequest>(initialValues);

  useEffect(() => {
    setFormValues(data);
  }, [data]);

  const handleClose = () => setShow(false);

  const onChange = (dataForm: Record<string, any>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...dataForm,
    }));
  };

  const handleSubmit = (dataForm: CreateOrUpdateUserRequest) => {
    dispatch(updateUser(dataForm));
  };

  return (
    <Offcanvas show={show} {...restProps}>
      <Offcanvas.Header>
        <Offcanvas.Title>Cập nhật thông tin tài khoản</Offcanvas.Title>
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

export default UpdateUserComponent;
