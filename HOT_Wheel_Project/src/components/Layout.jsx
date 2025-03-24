import {Outlet} from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
}