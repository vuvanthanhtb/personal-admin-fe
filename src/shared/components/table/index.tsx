import { Table } from "react-bootstrap";
import { TEXT } from "shared/constants";
import styles from "./_table.module.scss";

interface TableColumn {
  name: string;
  label: string;
  type: string;
  style?: Record<string, any>;
  styleCell?: Record<string, any>;
}

interface DataTableProps {
  tableConfig: TableColumn[];
  data: Record<string, any>[];
}

const DataTable: React.FC<DataTableProps> = (props) => {
  const { tableConfig, data } = props;
  return (
    <Table bordered responsive className={styles["table-container"]}>
      <thead>
        <tr>
          {tableConfig.map((col: Record<string, any>, index: number) => (
            <th key={`head-${index}`} style={col?.style || {}}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: Record<string, any>, rowIndex: number) => (
          <tr key={`row-${rowIndex}`}>
            {tableConfig.map((col: Record<string, any>, colIndex: number) => {
              if (col.type === TEXT) {
                return (
                  <td
                    key={`cell-${rowIndex}-${colIndex}`}
                    style={col?.styleCell || {}}
                  >
                    {row[col.name]}
                  </td>
                );
              }

              return null;
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
