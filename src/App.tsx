import '@fontsource/ibm-plex-sans';
import { Route, Routes, useLocation } from "react-router-dom";
import { useStytchMemberSession } from "@stytch/react/b2b";
import "./App.css";
import Settings from "./components/Settings";
import Members from "./components/Members";
import SSO from "./components/SSO";
import SCIM from "./components/SCIM";
import { Dashboard } from "./components/Dashboard";
import { SideNav } from "./components/SideNav";
import { LoginOrSignup } from "./components/LoginOrSignup";
import { Authenticate } from "./components/Authenticate";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

export const App = () => {
  const location = useLocation();
  const { session } = useStytchMemberSession();
  const showSidebar =
    session &&
    ["/dashboard", "/settings", "/members", "/sso", "/scim"].includes(location.pathname);

  return (
    <div className="app-container">
      {showSidebar && <SideNav />}
      <div className="centered-container">
        <Routes>
          <Route path="/" element={<LoginOrSignup />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/sso" element={<SSO />} />
            <Route path="/scim" element={<SCIM />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
