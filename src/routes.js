import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { getItem } from "./utils/storage";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function ProtectedRoutes({ redirectTo }) {
  const isAuth = getItem("token");

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}

function AllRoutes() {
  return (
    <div className="container-main">
      <Routes>
        <Route path="/">
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<ProtectedRoutes redirectTo={"/sign-in"} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<h1>Not Found 404</h1>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
