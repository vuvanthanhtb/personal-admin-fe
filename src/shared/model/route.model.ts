import type { JSX } from "react/jsx-runtime";

type IRoute = {
  name: string;
  title: string;
  path: string;
  private: boolean;
  component: React.LazyExoticComponent<() => JSX.Element>;
  roles?: string[];
  child?: IRoute[];
};

export type { IRoute as IRouteModel };
