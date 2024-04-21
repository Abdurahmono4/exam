import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Layout
import MainLayout from "./Layout/MainLayout";

// pages
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";

// components
import ProtectedRotes from "./components/ProtectedRotes";
import Navbar from "./components/Navbar";

//context
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/useGlobalContext";

//firebase
import { auth } from "./firebase/fireBaseConfig";
import { onAuthStateChanged } from "firebase/auth";

//action
import { action as signupAction } from "./pages/Signup";
import { action as signinAction } from "./pages/Signin";
import Create from "./pages/Create";

function App() {
  const { user, dispatch, authChange } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRotes user={user}>
          <MainLayout />
        </ProtectedRotes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/signin",
      element: user ? <Navigate to="/" /> : <Signin />,
      action: signinAction,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
      action: signupAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "SIGN_IN", payload: user });
      }
    });
    dispatch({
      type: "AUTH_CHANGE",
    });
  }, []);
  return <div>{authChange && <RouterProvider router={routes} />}</div>;
}

export default App;
