import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Outlet } from "react-router-dom";
import FullPageLoading from "@/shared/pages/full-page-loading";
const NotFoundPage = lazy(() => import("@/shared/pages/not-found"));

const LoginPage = lazy(() => import("@/modules/auth/pages/login"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageLoading />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Outlet />
    </BrowserRouter>
  );
};

export default AppRoutes;
