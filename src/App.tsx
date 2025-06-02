import AppRoutes from "./app/routes";
import FullPageLoading from "./shared/pages/full-page-loading";

const App = () => {
  return (
    <>
      <AppRoutes />
      <FullPageLoading />
    </>
  );
};

export default App;
