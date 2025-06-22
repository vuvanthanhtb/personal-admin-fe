import { useState } from "react";
import { useDispatch } from "react-redux";
import { DataTable, FormComponent } from "shared";
import type { AppDispatch } from "app/redux/store";
import { initialValues, searchConfig, tableConfig } from "./config.api-page";
import styles from "./_api.module.scss";
import { AssignRoleComponent } from "../components";
import type { SearchApiRequest } from "../business/model.api";
import { getApiList } from "../business/slice.api";

const ApiPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formValues, setFormValues] = useState<SearchApiRequest>(initialValues);
  const [isUpdate, setUpdate] = useState<boolean>(false);
  const [rowSelected, setRowSelected] = useState<unknown | null>(null);

  const onChange = (data: Record<string, unknown>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));
  };

  const handleSubmit = (data: SearchApiRequest) => {
    dispatch(getApiList(data));
  };

  const handleCellAction = (row: unknown) => {
    setUpdate(true);
    setRowSelected(row);
  };

  return (
    <div className={styles["api-page-container"]}>
      <FormComponent
        options={{
          endpointOption: [],
        }}
        formConfig={searchConfig}
        values={formValues}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
      <div className={styles["api-page-space"]} />
      <DataTable
        tableConfig={tableConfig}
        reducer="api"
        state="list"
        handleCellAction={handleCellAction}
      />
      {isUpdate && (
        <AssignRoleComponent
          placement="end"
          show={isUpdate}
          setShow={setUpdate}
          data={rowSelected}
        />
      )}
    </div>
  );
};

export default ApiPage;
