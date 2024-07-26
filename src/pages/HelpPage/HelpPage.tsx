import { ROUTES } from "@/routes";
import { Link } from "react-router-dom";

export const HelpPage = () => {
  return (
    <div className="in_development">
      <h1>Help page in development</h1>
      <h2>
        We invite you to visit the <Link to={ROUTES.CUSTOMERS}>Customers</Link>{" "}
        page
      </h2>
    </div>
  );
};
