import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-slate-800 min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <section id="home" className="w-full"><Home /></section>
        <section id="about" className="w-full"><About /></section>
        <section id="skills" className="w-full "><Skills /></section>
        <section id="projects" className="w-full "><Projects /></section>
        <section id="contact" className="w-full"><Contact /></section>
        <Footer />
      </div>
    ),
  },
  {
    path: "/projectDetails",
    element: <ProjectDetails />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
