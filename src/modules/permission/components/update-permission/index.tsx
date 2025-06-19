import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import type { AppDispatch } from "app/redux/store";
import { FormComponent } from "shared";
import styles from "./_update.module.scss";
import { initialValues, permissionConfig } from "./config.update-permission";
import type { CreateOrUpdatePermissionRequest } from "modules/permission/business/model.permission";
import { updatePermission } from "modules/permission/business/slice.permission";
import { parseUpdatePermissionRequest } from "modules/permission/business/helper.permission";

interface UpdatePermissionComponentProps {
  show: boolean;
  setShow: (show: boolean) => void;
  data: any;
  [key: string]: any;
}

const UpdatePermissionComponent = (props: UpdatePermissionComponentProps) => {
  const { show, setShow, data, ...restProps } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<CreateOrUpdatePermissionRequest>(initialValues);

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

  const handleSubmit = (dataForm: CreateOrUpdatePermissionRequest) => {
    const req = parseUpdatePermissionRequest(dataForm);
    dispatch(updatePermission(req));
  };

  return (
    <Offcanvas show={show} {...restProps}>
      <Offcanvas.Header>
        <Offcanvas.Title>Cập nhật thông tin Permissionn</Offcanvas.Title>
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

export default UpdatePermissionComponent;
