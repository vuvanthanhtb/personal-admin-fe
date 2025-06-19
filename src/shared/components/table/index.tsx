import { useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { BUTTON, STRING } from "shared/constants";
import type { RootState } from "app/redux/store";
import type { IButton } from "shared/model/button.model";
import type { TableColumn } from "shared/model/table.model";
import styles from "./_table.module.scss";
import { Fragment } from "react/jsx-runtime";

interface DataTableProps {
  tableConfig: TableColumn[];
  btnGroup?: IButton[];
  reducer: keyof RootState;
  state: string;
  handleCellAction?: (row: Record<string, any>, key?: string) => void;
  handlers?: Record<string, (e?: React.MouseEvent) => void>;
}

export const DataTable: React.FC<DataTableProps> = (props) => {
  const { tableConfig, reducer, state, handleCellAction, btnGroup, handlers } =
    props;
  const dataTable = useSelector(
    (store: RootState) =>
      store[reducer][state as keyof (typeof store)[typeof reducer]]
  );

  const { data = [] } = dataTable as { data?: any[] };

  return (
    <Fragment>
      <div className={styles["table-btn-group"]}>
        {btnGroup?.map((btn: IButton, index: number) => {
          const onClickHandler = handlers?.[btn.action];
          return (
            <Button
              key={`table-btn-group-${index}`}
              type={btn.type}
              disabled={btn.disabled}
              className="me-2"
              style={btn?.style || {}}
              onClick={(event) => {
                if (typeof onClickHandler === "function") {
                  onClickHandler(event);
                }
              }}
            >
              {btn.label}
            </Button>
          );
        })}
      </div>
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
                if (col.type === STRING) {
                  let styleCell = col?.styleCell || {};
                  if (col?.colorCustom) {
                    console.log(2000, col.colorCustom);
                    const color = col.colorCustom[row[col.name]] || "unset";
                    styleCell = { ...styleCell, color };
                  }
                  return (
                    <td
                      key={`cell-${rowIndex}-${colIndex}`}
                      style={styleCell}
                      className="align-middle"
                    >
                      {row[col.name]}
                    </td>
                  );
                }

                if (col.type === BUTTON) {
                  return (
                    <td
                      key={`cell-${rowIndex}-${colIndex}`}
                      className={styles["btn-group"]}
                    >
                      {(col.btnGroup || []).map(
                        (btn: IButton, btnIndex: number) => {
                          return (
                            <Button
                              key={`cell-${rowIndex}-${colIndex}-btn-${col.name}-${btnIndex}`}
                              type={btn.type}
                              disabled={btn.disabled}
                              className="me-2"
                              style={btn?.style || {}}
                              onClick={() => handleCellAction?.(row, btn?.key)}
                            >
                              {btn.label}
                            </Button>
                          );
                        }
                      )}
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};
