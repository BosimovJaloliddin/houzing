import React, { lazy, Suspense } from "react";
import useUniqueId from "../hooks/useId";
const HomePage = lazy(() => import("../pages/Home"));
const PropertiesPage = lazy(() => import("../pages/Properties"));
const MyPropertiesPage = lazy(() => import("../pages/MyProperties"));
const RegisterPage = lazy(() => import("../pages/Register"));
const HouseItem = lazy(() => import("../pages/HouseItem"));
const FavouritePage = lazy(() => import("../pages/Favourite"));
const AddHousePage = lazy(() => import("../pages/AddHouse"));

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
        <MyPropertiesPage />
      </Suspense>
    ),
    title: "MyProperties",
    path: "/myproperties",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <AddHousePage />
      </Suspense>
    ),
    title: "AddHouse",
    path: "/myproperties/newhouse",
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    element: (
      <Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <FavouritePage />
      </Suspense>
    ),
    title: "Favourite",
    path: "/favourite",
    private: false,
    hidden: true,
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
        <RegisterPage />
      </Suspense>
    ),
    title: "Signup",
    path: "/signin",
    private: false,
    hidden: true,
  },
];
