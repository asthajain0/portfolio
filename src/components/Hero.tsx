"use client"
import Image from "next/image"
import cursor from '../assets/icon1.png'
import lightning from '../assets/icon2.png'
import { motion } from "framer-motion"
import profilepic from '../assets/profilepic.png'

const Hero = () => {
  return (
    <div className="py-20 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
                      bg-[radial-gradient(closest-side,#000_90%,#2B1942)]">
      </div>

      <div className="relative px-4">
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hello, I am</h1>
          <h1 className="text-[#E48A57]">Astha Jain</h1>
        </div>

        {/* Cursor icon */}
        <motion.div
          className="hidden md:block absolute left-4 top-[120px] sm:left-[120px] sm:top-[170px]"
          drag>
          <Image
            src={cursor}
            height={190}
            width={190}
            alt="cursor"
            className=""
            draggable="false"
          />
        </motion.div>

        {/* Lightning icon */}
        <motion.div
          className="hidden md:block absolute right-4 top-[30px] sm:right-[100px] sm:top-[50px]"
          drag>
          <Image
            src={lightning}
            height={120}
            width={120}
            alt="lightning"
            className=""
            draggable="false"
          />
        </motion.div>

        {/* Description */}
        <p className="text-center text-base sm:text-lg md:text-xl max-w-[90%] sm:max-w-[500px] mx-auto mt-6 sm:mt-3 text-white/60">
          Tech enthusiast and problem solver, building impactful web solutions with a strong foundation in core CS concepts.
        </p>

        {/* Profile Image */}
        <div className="mt-6 sm:mt-6 flex justify-center">
          <Image
            src={profilepic}
            alt="profile picture"
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
