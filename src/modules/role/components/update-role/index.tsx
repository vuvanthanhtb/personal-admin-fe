import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import type { AppDispatch } from "app/redux/store";
import { FormComponent } from "shared";
import styles from "./_update-role.module.scss";
import { initialValues, roleConfig } from "./config.update-role";
import type { CreateOrUpdateRoleRequest } from "modules/role/business/model.role";
import { parseUpdateRoleRequest } from "modules/role/business/helper.role";
import { updateRole } from "modules/role/business/slice.role";

interface UpdateRoleComponentProps {
  show: boolean;
  setShow: (show: boolean) => void;
  data: any;
  [key: string]: any;
}

const UpdateRoleComponent = (props: UpdateRoleComponentProps) => {
  const { show, setShow, data, ...restProps } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<CreateOrUpdateRoleRequest>(initialValues);

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

  const handleSubmit = (dataForm: CreateOrUpdateRoleRequest) => {
    const req = parseUpdateRoleRequest(dataForm);
    dispatch(updateRole(req));
  };

  return (
    <Offcanvas show={show} {...restProps}>
      <Offcanvas.Header>
        <Offcanvas.Title>Cập nhật thông tin Role</Offcanvas.Title>
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

export default UpdateRoleComponent;
