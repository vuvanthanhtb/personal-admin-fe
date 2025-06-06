import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Outlet } from "react-router-dom";
import { PrivateLayout, FullPageLoading, routes } from "shared";
import type { IRouteModel } from "shared/model/route.model";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageLoading />}>
        <Routes>
          {routes.map((route: IRouteModel, index: number) => {
            const {
              path,
              component: Component,
              private: isPrivate,
              title,
            } = route;

            if (isPrivate) {
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <PrivateLayout title={title}>
                      <Component />
                    </PrivateLayout>
                  }
                />
              );
            }

            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Routes>
      </Suspense>
      <Outlet />
    </BrowserRouter>
  );
};

export default AppRoutes;
