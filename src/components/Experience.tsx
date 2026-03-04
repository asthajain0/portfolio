import React from "react"

const Experience = () => {
  return (
    <div className="bg-black px-6 sm:px-10 md:px-20 py-16" id="experience">

      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-center font-semibold mb-12">
        My <span className="text-orange-400">Experience</span>
      </h1>

      <div className="flex justify-center">
        {/* Experience Card */}
        <div className="w-full max-w-4xl relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 p-8 sm:p-10 items-start md:items-center">
            
            {/* Left side / Date & Company visual */}
            <div className="flex-shrink-0 bg-white/5 border border-white/10 rounded-lg p-6 w-full md:w-62 text-center flex flex-col justify-center items-center shadow-[0_0_15px_rgba(255,165,0,0.2)]">
               <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-purple-500 mb-2">
                 MediBuddy
               </div>
               <div className="text-sm text-white/60 tracking-widest font-semibold font-mono">
                 Jan 2026 - July 2026
               </div>
            </div>

            {/* Right side / Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Software Development Engineer Intern</h2>
              <div className="mb-4 inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full border border-orange-500/30">
                SDE Intern
              </div>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed text-justify mb-4">
                Contributed to backend development as part of the Distribution Team, working on systems that enable the delivery of medical benefit services to multiple corporate clients. Collaborated with engineers to understand system architecture and implement backend features using various technologies and development tools. Focused on maintaining system reliability, improving functionality, and supporting integrations that ensure seamless benefit distribution.              
              </p>

              {/* Technologies Tag Array */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["Nest.js", "Node.js", "Express", "AWS", "Dbeaver", "PostgreSQL", "Bitbucket", "Postman", "Kafka", "Pgboss"].map((tech, idx) => (
                  <span key={idx} className="bg-white/5 border border-white/10 text-white/80 text-xs px-3 py-1.5 rounded-md backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience
