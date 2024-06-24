import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

type Props = { children?: ReactNode };

function Layout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div>{children ?? <Outlet />}</div>
    </div>
  );
}

export default Layout;
