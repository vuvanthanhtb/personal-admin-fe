import { useState } from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import type { AppDispatch } from "app/redux/store";
import { FormComponent } from "shared";
import styles from "./_create.module.scss";
import { initialValues, permissionConfig } from "./config.create-permission";
import type { CreateOrUpdatePermissionRequest } from "modules/permission/business/model.permission";
import { createPermission } from "modules/permission/business/slice.permission";
import { parseCreatePermissionRequest } from "modules/permission/business/helper.permission";

interface CreatePermissionComponentProps {
  show: boolean;
  setShow: (show: boolean) => void;
  [key: string]: any;
}

const CreatePermissionComponent = (props: CreatePermissionComponentProps) => {
  const { show, setShow, ...restProps } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<CreateOrUpdatePermissionRequest>(initialValues);

  const handleClose = () => setShow(false);

  const onChange = (dataForm: Record<string, any>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...dataForm,
    }));
  };

  const handleSubmit = (dataForm: CreateOrUpdatePermissionRequest) => {
    const req = parseCreatePermissionRequest(dataForm);
    dispatch(createPermission(req));
  };

  return (
    <Offcanvas show={show} {...restProps}>
      <Offcanvas.Header>
        <Offcanvas.Title>Tạo Permission mới</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles["permission-info"]}>
          <FormComponent
            formConfig={permissionConfig}
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

export default CreatePermissionComponent;
