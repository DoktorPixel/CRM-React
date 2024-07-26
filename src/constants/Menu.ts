import { ROUTES } from "@/routes";
import {
  DashboardIcon,
  ProductIcon,
  CustomersIcon,
  IncomeIcon,
  PromoteIcon,
  HelpIcon,
} from "@/assets/icons/Icons";

export const MENU = [
  {
    label: "Dashboard",
    link: ROUTES.DASHBOARD,
    icon: DashboardIcon,
  },
  {
    label: "Product",
    link: ROUTES.PRODUCT,
    icon: ProductIcon,
  },
  {
    label: "Customers",
    link: ROUTES.CUSTOMERS,
    icon: CustomersIcon,
  },

  {
    label: "Income",
    link: ROUTES.INCOME,
    icon: IncomeIcon,
  },
  {
    label: "Promote",
    link: ROUTES.PROMOTE,
    icon: PromoteIcon,
  },
  {
    label: "Help",
    link: ROUTES.HELP,
    icon: HelpIcon,
  },
];
