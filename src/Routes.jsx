import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
// import NotFound from "pages/NotFound";
import Homepage from './page/homepage/index.jsx';
import ProjectShowcaseHub from './page/projectpage/index.jsx';
import ContactCommandCenter from './page/contactpage/index.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      {/* <ScrollToTop /> */}
      <RouterRoutes>
        {/* Define your route here */}
        {/* <Route path="/" element={<ContactCommandCenter />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/project-showcase-hub" element={<ProjectShowcaseHub />} />
        <Route path="/contact-command-center" element={<ContactCommandCenter />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;