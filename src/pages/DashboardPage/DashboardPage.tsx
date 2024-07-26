import { Link } from "react-router-dom";

import { ROUTES } from "@/routes";
export const DashboardPage = () => {
  return (
    <div className="in_development">
      <h1>Dashboard page in development</h1>
      <h2>
        We invite you to visit the <Link to={ROUTES.CUSTOMERS}>Customers</Link>{" "}
        page
      </h2>
    </div>
  );
};
