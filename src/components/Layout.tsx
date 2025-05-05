import Sidebar from "./Sidebar";
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-[10px] overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
