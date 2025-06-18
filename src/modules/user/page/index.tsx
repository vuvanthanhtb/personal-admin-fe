import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataTable, FormComponent } from "shared";
import type { AppDispatch } from "app/redux/store";
import { initialValues, searchConfig, tableConfig } from "./config";
import type { SearchUsersRequest } from "../business/model.user";
import { getUsersList } from "../business/slice.user";
import UserInfoComponent from "../components/user-info";
import styles from "./_users.module.scss";

const UserPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] =
    useState<SearchUsersRequest>(initialValues);
  const [show, setShow] = useState<boolean>(false);
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
    setShow(true);
    setRowSelected(row);
  };

  return (
    <div className={styles["user-page-container"]}>
      <FormComponent
        formConfig={searchConfig}
        values={formValues}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
      <div className={styles["user-page-space"]} />
      <DataTable
        tableConfig={tableConfig}
        reducer="user"
        state="list"
        handleCellAction={handleCellAction}
      />
      {show && (
        <UserInfoComponent
          placement="end"
          show={show}
          setShow={setShow}
          data={rowSelected}
        />
      )}
    </div>
  );
};

export default UserPage;
