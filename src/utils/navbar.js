import React, { lazy, Suspense } from "react";
import useUniqueId from "../hooks/useId";
const HomePage = lazy(() => import("../pages/Home"));
const PropertiesPage = lazy(() => import("../pages/Properties"));
const SignIn = lazy(() => import("../components/SignIn"));
const HouseItem = lazy(() => import("../components/HouseItem"));

// import HomePage from "../pages/Home";
// import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <HomePage />
      </Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage />
      </Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HouseItem />
      </Suspense>
    ),
    title: "Signup",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },

  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <SignIn />
      </Suspense>
    ),
    title: "Signup",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
