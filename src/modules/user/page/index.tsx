import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataTable, FormComponent } from "shared";
import type { AppDispatch } from "app/redux/store";
import { CreateUserComponent, UpdateUserComponent } from "../components";
import {
  btnGroup,
  initialValues,
  searchConfig,
  tableConfig,
} from "./config.user-page";
import type { SearchUsersRequest } from "../business/model.user";
import { getUsersList } from "../business/slice.user";
import styles from "./_users.module.scss";

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<SearchUsersRequest>(initialValues);
  const [isUpdate, setUpdate] = useState<boolean>(false);
  const [isCreate, setCreate] = useState<boolean>(false);
  const [rowSelected, setRowSelected] = useState(null);

  const onChange = (data: Record<string, any>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));
  };

  const handleSubmit = (data: SearchUsersRequest) => {
    dispatch(getUsersList(data));
  };

  const handleCellAction = (row: any) => {
    setUpdate(true);
    setRowSelected(row);
  };

  const handleCreate = () => {
    setCreate(true);
  };

  return (
    <div className={styles["user-page-container"]}>
      <FormComponent
        options={{
          roleOption: [
            { label: "ADMIN", value: "ADMIN" },
            { label: "USER", value: "USER" },
          ],
        }}
        formConfig={searchConfig}
        values={formValues}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
      <div className={styles["user-page-space"]} />
      <DataTable
        tableConfig={tableConfig}
        btnGroup={btnGroup}
        reducer="user"
        state="list"
        handleCellAction={handleCellAction}
        handlers={{
          handleCreate,
        }}
      />
      {isUpdate && (
        <UpdateUserComponent
          placement="end"
          show={isUpdate}
          setShow={setUpdate}
          data={rowSelected}
        />
      )}
      {isCreate && (
        <CreateUserComponent
          placement="end"
          show={isCreate}
          setShow={setCreate}
        />
      )}
    </div>
  );
};

export default UserPage;
