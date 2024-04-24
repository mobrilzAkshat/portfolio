import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import  Loader from "../src/component/PortfolioLoader/Loader";

const Layout = lazy(() => import("./component/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/ContactForm/Contact"));
const Resume = lazy(() => import("./pages/Resume/Resume"));
const Work = lazy(() => import("./pages/Works/Work"));

function AppRoutes() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      // Check if the tab is currently active
      if (document.visibilityState === 'visible') {
        document.title = 'Akshat Chawla Portfolio'; // Set the title when tab is active
      } else {
        document.title = '😢 Missing You'; // Set a different title when tab is inactive
      }
    };

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Set initial title when component mounts
    document.title = 'Your Website Name';

    // Clean up by removing event listener when component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Run only once when component mounts
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader/>}>
            <Layout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loader/>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/About"
          element={
            <Suspense fallback={<Loader/>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <Suspense fallback={<Loader/>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/Resume"
          element={
            <Suspense fallback={<Loader/>}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/Work"
          element={
            <Suspense fallback={<Loader/>}>
              <Work />
            </Suspense>
          }
        />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
