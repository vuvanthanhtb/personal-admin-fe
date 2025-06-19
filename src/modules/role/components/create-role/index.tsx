import { useState } from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import type { AppDispatch } from "app/redux/store";
import { FormComponent } from "shared";
import styles from "./_create-role.module.scss";
import { initialValues, roleConfig } from "./config.create-role";
import type { CreateOrUpdateRoleRequest } from "modules/role/business/model.role";
import { createRole } from "modules/role/business/slice.role";
import { parseCreateRoleRequest } from "modules/role/business/helper.role";

interface CreateRoleComponentProps {
  show: boolean;
  setShow: (show: boolean) => void;
  [key: string]: any;
}

const CreateRoleComponent = (props: CreateRoleComponentProps) => {
  const { show, setShow, ...restProps } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<CreateOrUpdateRoleRequest>(initialValues);

  const handleClose = () => setShow(false);

  const onChange = (dataForm: Record<string, any>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...dataForm,
    }));
  };

  const handleSubmit = (dataForm: CreateOrUpdateRoleRequest) => {
    const req = parseCreateRoleRequest(dataForm);
    dispatch(createRole(req));
  };

  return (
    <Offcanvas show={show} {...restProps}>
      <Offcanvas.Header>
        <Offcanvas.Title>Tạo Role mới</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles["role-info"]}>
          <FormComponent
            options={{
              permissionOption: [],
            }}
            formConfig={roleConfig}
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

export default CreateRoleComponent;
