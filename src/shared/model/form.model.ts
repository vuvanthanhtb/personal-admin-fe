import type { IButton } from "shared/model/button.model";

type IField = {
  name?: string;
  label?: string;
  type: string;
  validation?: {};
  placeholder?: string;
  disabled?: boolean;
  size: number;
  required?: boolean;
  option?: string;
  childs?: IButton[];
  isMulti?: boolean;
};

export type IConfig = {
  fields: IField[];
};
