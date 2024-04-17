import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header className="z-20">
        <Header />
      </header>
      <main className="flex-grow text-textColor">
        <Outlet />
      </main>
      <footer>
        {/* Footer */}
      </footer>
    </div>
  );
};

export default Layout;
