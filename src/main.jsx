import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Blog from "./pages/Blog"
// import OurPricing from "./pages/OurPricing";
// import Contact from "./pages/Contact"
// import Filter from "./pages/Filter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/About",
      //   element: <About />,
      // },
      // {
      //   path: "/OurPricing",
      //   element: <OurPricing />,
      // },
      // {
      //   path: "/Contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "/Blog",
      //   element: <Blog />,
      // },
      
     
     
      {
        path: "/",
        element: (
          <>
            <Footer />
            <Route />
          </>
        ),
      },
      {
        path: "/register",
        element: (
          <>
            <Footer />
            <Route />
          </>
        ),
      },
      {
        path: "/login",
        element: (
          <>
            <Footer />
            <Route />
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Footer />
            <Route />
          </>
        ),
      },
      {
        path: "/*",
        element: (
          <>
            {/* <Nav /> */}
            <Footer />
            <Route />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
