type IRoute = {
  name: string;
  title: string;
  path: string;
  private: boolean;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  roles?: string[];
  child?: IRoute[];
};

export type { IRoute as IRouteModel };
