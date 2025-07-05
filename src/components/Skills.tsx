import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs, FaStripe, FaJava } from 'react-icons/fa'
import { SiMongodb, SiCplusplus, SiExpress, SiPostman } from "react-icons/si"
import { RiNextjsFill } from "react-icons/ri"

const skillIcons = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
  { icon: <FaReact className="text-cyan-400" />, label: "React" },
  { icon: <FaJsSquare className="text-yellow-300" />, label: "JavaScript" },
  { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
  { icon: <FaNodeJs className="text-green-600" />, label: "NodeJs" },
  { icon: <FaStripe className="text-indigo-400" />, label: "Stripe" },
  { icon: <RiNextjsFill className="text-white" />, label: "NextJs" },
  { icon: <SiCplusplus className="text-blue-300" />, label: "C++" },
  { icon: <FaJava className="text-red-400" />, label: "Java" },
  { icon: <SiExpress className="text-white" />, label: "ExpressJs" },
  { icon: <SiPostman className="text-orange-400" />, label: "Postman" },
]

const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-20 px-4' id="skills">
      <div className='text-white max-w-[1100px] mx-auto text-center'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-[#b8dbfc]'>What I do</h2>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center bg-white/10 p-4 rounded-xl hover:scale-105 transition-transform duration-300'
            >
              <div className="text-5xl sm:text-6xl md:text-7xl mb-2">{skill.icon}</div>
              <p className='text-sm sm:text-base'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
