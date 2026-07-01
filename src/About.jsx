import img from "./assets/img.jpeg";
let About = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row items-center gap-8 md:gap-20 px-6 md:px-20 text-white">

                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left text-white">About Me</h2>
                    <p className="text-base md:text-lg mt-5 leading-relaxed text-white"> Hi, I'm Simran Sharma, a passionate MERN Stack Developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real-world solutions using MongoDB, Express.js, React, and Node.js.

                        I have hands-on experience developing full-stack applications, creating REST APIs, integrating databases, and building responsive user interfaces. I focus on writing clean, maintainable code and continuously improving my problem-solving and development skills.

                        I am always eager to learn new technologies, take on challenging projects, and grow as a software developer. My goal is to build impactful applications while contributing to a collaborative and innovative development team.

                        Skills: MongoDB, Express.js, React.js, Node.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Git, GitHub, REST APIs.

                    </p>
                </div>
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden flex-shrink-0">
                    <img src={img} className="h-full w-full flex-shrink-0 object-cover" />
                </div>
            </div>
        </>
    )
}
export default About;