"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import project1 from '../assets/proj1.png'
import project2 from '../assets/proj2.png'
import project3 from '../assets/proj3.png'
import project4 from '../assets/proj4.png'

const projects = [

  {
    title: "FlashGen - FlashCard Generator",
    desc: "A smart tool that lets users instantly generate flashcards from their notes using AI. Built with React and Tailwind CSS, it features a responsive UI, real-time character count, loading feedback, and context-based state management. Designed to enhance active recall and boost efficient study habits.",
    devstack: "React, axios, Gemini API, Nodemon, express.js, vercel",
    link: "https://flashgen-three.vercel.app",
    git: "https://github.com/asthajain0/FlashCard-Generator",
    src: project4,
  },
  {
    title: "PetPooja - Food Delivery Application",
    desc: "Designed a full-stack food delivery platform with separate customer and admin interfaces, enabling seamless ordering and management. Integrated secure authentication, Stripe payments, real-time dashboard, and role-based access for efficient operations.",
    devstack: "React, MongoDB, axios, Stripe(payment), Nodemon, express.js, Render",
    link: "https://food-delivery-frontend-pe78.onrender.com",
    git: "https://github.com/asthajain0/Food-Delivery",
    src: project3,
  },
  {
    title: "Faculty Portal for College Faculties",
    desc: "Built a centralized portal for faculty to manage student records, track deadlines, and collaborate efficiently. Included secure login, role-based access, real-time updates, and tools for marks entry, CSV generation, and attendance management.",
    devstack: "React.js, SpringBoot, SQL, Redux, Material-UI(MUI), StoryBook, eslint, Jest, axios",
    link: "#",
    git: "#",
    src: project1,
  },
  {
    title: "Bloggers - Online Blogging Application",
    desc: "Built an AI-powered blogging platform with admin-driven blog creation via GEMINI API and dynamic frontend rendering. Included secure JWT-based authentication, real-time commenting, and responsive deployment for seamless user experience.",
    devstack: "React, Node, express.js, MongoDB, axios, GEMINI API, ImageKit, Tailwind, Vercel",
    link: "https://bloggers-xi-rouge.vercel.app",
    git: "https://github.com/asthajain0/Bloggers",
    src: project2,
  },
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-20 px-4 sm:px-8" id="portfolio">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="max-w-[1100px] mx-auto space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`flex flex-col gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Text Section */}
            <div className="space-y-4 md:w-1/2">
              <h2 className="text-5xl sm:text-6xl text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-2xl sm:text-3xl font-semibold">{project.title}</h2>
              <p className="text-base sm:text-lg text-white/70">{project.desc}</p>
              <p className="text-sm sm:text-base text-orange-400 font-semibold">{project.devstack}</p>
              <div className="h-[1px] bg-gray-500 w-full my-4" />
              <div className="flex gap-6 text-white underline text-sm sm:text-base">
                <a href={project.link} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={project.git} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="w-full max-w-[500px] rounded border border-gray-600 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
