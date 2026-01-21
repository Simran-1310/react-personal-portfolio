import{FaLinkedin,FaGithub} from "react-icons/fa";

let Home=()=>{
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      };
    return(
        <>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 px-6 text-white py-12 md:py-25">
       <div className="flex flex-row md:flex-col gap-4 md:gap-6">
      <a href="" className="hover:text-blue-400 transition"><FaLinkedin size={30}/></a>
      <a href="https://github.com/Simran-1310" className="text-gray-300 hover:text-white transition"><FaGithub size={30}/></a>
      </div>

      <div className="text-center md:text-left">
      <p className="text-lg md:text-2xl">Hello, I am</p>
      <h2 className="text-3xl md:text-5xl font-bold mt-2">Simarn Sharama</h2>
      <h1 className="text-xl md:text-4xl text-orange-400 mt-2">Front end Web Developer</h1>
      <button onClick={() => scrollToSection("contact")} className="mt-4 md:mt-6 bg-orange-600 px-6 py-2 rounded-md">
        Contact Me &rarr;
      </button>
     </div>

      <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden flex-shrink-0">
      <img src="src/assets/Profile.jpeg" className="h-full w-full object-cover"/>
     </div>
     </div>

        </>
    )
}
export default Home;