import { Link } from "react-router-dom";

import'./App.css'

let Navbar=()=>{
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
    return(
      <>
      <nav className="w-full  text-white z-50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between">
        <div>
            <h2 className="text-2xl md:text-4xl font-bold">Portfolio</h2>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base md:text-lg font-semibold">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>   
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
       </div>
       </nav>
      </>
    )
  }
  export default Navbar;