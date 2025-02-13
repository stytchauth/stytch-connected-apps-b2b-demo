import '@fontsource/ibm-plex-sans';
import { Route, Routes, useLocation } from "react-router-dom";
import { useStytchMemberSession } from "@stytch/react/b2b";
import "./App.css";
import Settings from "./components/Settings";
import Members from "./components/Members";
import { Dashboard } from "./components/Dashboard";
import { SideNav } from "./components/SideNav";
import { Authenticate } from "./components/Authenticate";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import IDP from "./components/IDP";

export const App = () => {
  const location = useLocation();
  const { session } = useStytchMemberSession();
  const showSidebar =
    session &&
    ["/dashboard", "/settings", "/members"].includes(location.pathname);

  return (
    <div className="app-container">
      {showSidebar && <SideNav />}
      <div className="centered-container">
        <Routes>
          <Route path="/" element={<Authenticate />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/idp" element={<IDP />} />
        </Routes>
      </div>
    </div>
  );
};
