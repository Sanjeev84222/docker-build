import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import firebase from "firebase/app";
import "firebase/auth";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./context/userContext";
import Home from "./Components/Home";
import SignIn from "./Main/signIn";
import SignUp from "./Main/SignUp";
import PageNotFound from "./Main/PageNotFound";
import { Suspense } from "react";

function configureRoutes() {
  const routes = [
    {
      accessible: true,
      component: Home,
      exact: true,
      path: "/",
      title: "Home",
      type: "public",
    },
  ];
  return routes;
}
function App() {
  const routes = configureRoutes();
  const [user, setUser] = useState();
  return (
    <Suspense fallback={null}>
      <Router>
        {routes.map((route) => {
          if (route.type === "private") {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Navigate replace to="/" />}
              />
            );
          } else <Navigate replace to="/signup" />;
        })}

        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </UserContext.Provider>
      </Router>
    </Suspense>
  );
}

export default App;
