import img from "./assets/img.jpeg";
let About=()=>{
    return(
        <>
        <div className="min-h-screen flex flex-col md:flex-row items-center gap-8 md:gap-20 px-6 md:px-20 text-white">
        
            <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-white">About Me</h2>
            <p className="text-base md:text-lg mt-5 leading-relaxed text-white">Hi! I'm Simarn Sharam, a passionate web developer eager to create modern and responsive web applications.<br/> I specialize in React, JavaScript, and Tailwind CSS, and I enjoy learning new technologies to improve my coding skills.

            I'm enthusiastic about building user-friendly and visually appealing websites. Though I’m just starting my professional journey, I have worked on personal projects and learning exercises that helped me gain practical experience in frontend development.

            I'm a fast learner, a problem-solver, and I love turning ideas into real web applications. When I’m not coding, I enjoy exploring new frameworks, reading tech blogs, and experimenting with design and layout ideas.
           </p>
           </div>
           <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden flex-shrink-0">
            <img src={img} className="h-full w-full flex-shrink-0 object-cover"/>
           </div>
        </div>
        </>
    )
}
export default About;