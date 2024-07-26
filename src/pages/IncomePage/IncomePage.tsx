import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";

export const IncomePage = () => {
  return (
    <div className="in_development">
      <h1>Income page in development</h1>
      <h2>
        We invite you to visit the <Link to={ROUTES.CUSTOMERS}>Customers</Link>{" "}
        page
      </h2>
    </div>
  );
};
