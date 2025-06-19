import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import type { AppDispatch } from "app/redux/store";
import { FormComponent } from "shared";
import styles from "./_assign-role.module.scss";
import { initialValues, apiConfig } from "./config.assign-role";
import type { AssignRoleRequest } from "modules/api/business/model.api";
import { assignRole } from "modules/api/business/slice.api";
import { parseAssignRoleRequest } from "modules/api/business/helper.api";

interface AssignRoleComponentProps {
  show: boolean;
  setShow: (show: boolean) => void;
  data: any;
  [key: string]: any;
}

const AssignRoleComponent = (props: AssignRoleComponentProps) => {
  const { show, setShow, data, ...restProps } = props;
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<AssignRoleRequest>(initialValues);

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

  const handleSubmit = (dataForm: AssignRoleRequest) => {
    const req = parseAssignRoleRequest(dataForm);
    dispatch(assignRole(req));
  };

  return (
    <Offcanvas show={show} {...restProps}>
      <Offcanvas.Header>
        <Offcanvas.Title>Gán quyền cho API</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles["api-info"]}>
          <FormComponent
            options={{
              roleOption: [
                { label: "ADMIN", value: "ADMIN" },
                { label: "USER", value: "USER" },
              ],
            }}
            formConfig={apiConfig}
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

export default AssignRoleComponent;
