import { Sidebar } from "../common";
import { Header } from "../common/Header/Header";
import { Outlet } from "react-router-dom";
import { USER } from "@/constants";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="layout_wrapper">
      <Sidebar />
      <Header />
      <main className="main">
        <h2 className="greetings">Hello {USER.name} 👋🏼,</h2>
        <div className="main-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
