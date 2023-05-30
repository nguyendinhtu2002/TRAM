import "./App.css";
import React, { Fragment } from "react";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import { router } from "./router";
import DefaultComponent from "./Component/DefaultComponent/DefaultComponent";

function App() {
  const ProtectedRoute = ({ path, element }) => {
    const token = window.localStorage.getItem("access_token");
    return token ? (
      <Route path={path} element={element} />
    ) : (
      <Navigate to="/login" replace />
    );
  };
  return (
    <div>
      <Router>
        <Routes>
          {router.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            const RouteComponent = route.isProtected ? ProtectedRoute : Route;

            return (
              <RouteComponent
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
