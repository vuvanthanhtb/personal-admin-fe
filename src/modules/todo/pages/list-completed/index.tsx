import { DataTable } from "shared/components";
import { tableConfig, dataMock } from "./config";
import styles from "./_completed.module.scss";

const ListTodosCompletedPage = () => {
  return (
    <div className={styles["completed-container"]}>
      <DataTable tableConfig={tableConfig} data={dataMock} />
    </div>
  );
};

export default ListTodosCompletedPage;
