import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from "../pages/Jobs";
import { LOGIN, SIGNUP, HOME, JOBS } from "../utils/constants/RouterConstants";

const HomeScreen = lazy(() => import("../pages/Home"));
const SignupScreen = lazy(() => import("../pages/Signup"));
const LoginScreen = lazy(() => import("../pages/Login"));
const JobsScreen = lazy(() => import("../pages/Jobs"));

type INavigationProps = {};

const Navigation = (props: INavigationProps) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<HomeScreen />} />
          <Route path= {JOBS} element = {<JobsScreen />} />
          <Route path={SIGNUP} element={<SignupScreen />} />
          <Route path={LOGIN} element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navigation;