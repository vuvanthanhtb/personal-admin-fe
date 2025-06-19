import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataTable, FormComponent } from "shared";
import type { AppDispatch } from "app/redux/store";
import {
  btnGroup,
  initialValues,
  searchConfig,
  tableConfig,
} from "./config.permission-page";
import styles from "./_permission.module.scss";
import type { SearchPermissionsRequest } from "../business/model.permission";
import { getPermissionsList } from "../business/slice.permission";
import {
  CreatePermissionComponent,
  UpdatePermissionComponent,
} from "../components";

const PermissionPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<SearchPermissionsRequest>(initialValues);
  const [isUpdate, setUpdate] = useState<boolean>(false);
  const [isCreate, setCreate] = useState<boolean>(false);
  const [rowSelected, setRowSelected] = useState(null);

  const onChange = (data: Record<string, any>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));
  };

  const handleSubmit = (data: SearchPermissionsRequest) => {
    dispatch(getPermissionsList(data));
  };

  const handleCellAction = (row: any) => {
    setUpdate(true);
    setRowSelected(row);
  };

  const handleCreate = () => {
    setCreate(true);
  };

  return (
    <div className={styles["permission-page-container"]}>
      <FormComponent
        formConfig={searchConfig}
        values={formValues}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
      <div className={styles["permission-page-space"]} />
      <DataTable
        tableConfig={tableConfig}
        btnGroup={btnGroup}
        reducer="permission"
        state="list"
        handleCellAction={handleCellAction}
        handlers={{
          handleCreate,
        }}
      />
      {isUpdate && (
        <UpdatePermissionComponent
          placement="end"
          show={isUpdate}
          setShow={setUpdate}
          data={rowSelected}
        />
      )}
      {isCreate && (
        <CreatePermissionComponent
          placement="end"
          show={isCreate}
          setShow={setCreate}
        />
      )}
    </div>
  );
};

export default PermissionPage;
