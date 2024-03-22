import Navbarr from "./components/Navbarr";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbarr />
          <Home />
        </>
      ),
    },
    {
      path: "/Login",
      element: (          
        <>
          <Navbarr />
          <Login />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <Navbarr />
          <About />
        </>
      ),
    },
    {
      path: "/User/:username",
      element: (
        <>
          <Navbarr />
          <User />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
