import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataTable, FormComponent } from "shared";
import type { AppDispatch } from "app/redux/store";
import {
  btnGroup,
  initialValues,
  searchConfig,
  tableConfig,
} from "./config.role-page";
import styles from "./_roles.module.scss";
import type { SearchRolesRequest } from "../business/model.role";
import { getRolesList } from "../business/slice.role";
import { CreateRoleComponent, UpdateRoleComponent } from "../components";

const RolePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<SearchRolesRequest>(initialValues);
  const [isUpdate, setUpdate] = useState<boolean>(false);
  const [isCreate, setCreate] = useState<boolean>(false);
  const [rowSelected, setRowSelected] = useState(null);

  const onChange = (data: Record<string, any>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));
  };

  const handleSubmit = (data: SearchRolesRequest) => {
    dispatch(getRolesList(data));
  };

  const handleCellAction = (row: any) => {
    setUpdate(true);
    setRowSelected(row);
  };

  const handleCreate = () => {
    setCreate(true);
  };

  return (
    <div className={styles["role-page-container"]}>
      <FormComponent
        options={{
          permissionOption: [],
        }}
        formConfig={searchConfig}
        values={formValues}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
      <div className={styles["role-page-space"]} />
      <DataTable
        tableConfig={tableConfig}
        btnGroup={btnGroup}
        reducer="role"
        state="list"
        handleCellAction={handleCellAction}
        handlers={{
          handleCreate,
        }}
      />
      {isUpdate && (
        <UpdateRoleComponent
          placement="end"
          show={isUpdate}
          setShow={setUpdate}
          data={rowSelected}
        />
      )}
      {isCreate && (
        <CreateRoleComponent
          placement="end"
          show={isCreate}
          setShow={setCreate}
        />
      )}
    </div>
  );
};

export default RolePage;
