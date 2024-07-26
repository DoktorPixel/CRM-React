export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PRODUCT: "/product",
  CUSTOMERS: "/customers",
  INCOME: "/income",
  PROMOTE: "/promote",
  HELP: "/help",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
