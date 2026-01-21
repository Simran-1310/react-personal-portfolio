import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

let Skills=()=>{
    const skills=[
        {name:"HTML",icon:<FaHtml5 className="text-orange-500"/>},
        {name:"CSS",icon:<FaCss3Alt className="text-blue-400"/>},
        {name:"JavaScript",icon:<FaJsSquare className="text-yellow-400"/>},
        {name:"React",icon:<FaReact className="text-cyan-500"/>}
    ]
    return(
        <>
        <div className="min-h-screen">
        <div className="mx-auto px-6" >
         <h2 className="text-3xl md:text-4xl font-bold text-center  text-white mt-10">My Skills</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-xl">
            {skills.map((skill)=>{return(
                <div key={skill.name} className="flex flex-col justify-center items-center p-10 bg-white rounded-xl shadow-lg hover:scale-108 transition-transform mt-15">
                    <div className="text-6xl mb-4">{skill.icon}</div>
                    <div className="text-xl font-semibold">{skill.name}</div>
                </div>
            )
            })}
         </div>
        </div>
        </div>
        </>
    )
}
export default Skills;

