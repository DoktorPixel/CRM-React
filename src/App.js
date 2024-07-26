import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layouts";
import {
  DashboardPage,
  CustomersPage,
  ProductPage,
  IncomePage,
  PromotePage,
  HelpPage,
} from "./pages";

import { ROUTES } from "./routes";

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<DashboardPage />} />
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
          <Route path={ROUTES.CUSTOMERS} element={<CustomersPage />} />
          <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
          <Route path={ROUTES.INCOME} element={<IncomePage />} />
          <Route path={ROUTES.PROMOTE} element={<PromotePage />} />
          <Route path={ROUTES.HELP} element={<HelpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

