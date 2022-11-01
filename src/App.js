import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          exact
          element={isLoggedIn ? <HomePage /> : <Navigate to="/auth" replace />}
        />
        {!isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route
          path="/profile"
          element={
            isLoggedIn ? <UserProfile /> : <Navigate to="/auth" replace />
          }
        ></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
