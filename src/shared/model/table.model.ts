import { PAGE_CURRENT, PAGE_SIZE, TOTAL_PAGE, TOTAL_RECORD } from "..";
import type { IButton } from "./button.model";

export interface TableColumn {
  name: string;
  label: string;
  type: string;
  style?: Record<string, any>;
  styleCell?: Record<string, any>;
  colorCustom?: Record<string, any>;
  btnGroup?: IButton[];
}

export interface DataTableConfig {
  data: any[];
  pageCurrent: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
}

export const DATA_TABLE_DEFAULT: DataTableConfig = {
  data: [],
  pageCurrent: PAGE_CURRENT,
  pageSize: PAGE_SIZE,
  totalPage: TOTAL_PAGE,
  totalRecord: TOTAL_RECORD,
};
