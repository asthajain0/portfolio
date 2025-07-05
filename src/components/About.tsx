"use client"
import React from "react"
import Image from "next/image"
import book from '../assets/book.png'
import pc from '../assets/pc.png'
import card from '../assets/card.png'
import finance from '../assets/finance.png'

const About = () => {
  return (
    <div className="bg-black px-6 sm:px-10 md:px-20 py-16" id="about">

      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl text-center font-semibold mb-12">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-8 place-items-center">

        {/* Card 1 */}
        <div className="w-full col-span-1 sm:col-span-2 lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6">
            <Image src={book} alt="book" className="h-[100px] sm:h-[130px] w-auto" />
            <div>
              <h2 className="text-2xl font-bold text-white/80">Education</h2>
              <p className="text-base sm:text-lg text-white/70 mt-2">Pursuing B.E. in Computer Science from IET DAVV, Indore with a CGPA of 8.6. Consistently performed well academically with 93.8% in Class 12 and 92.2% in Class 10.

</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full col-span-1 sm:col-span-2 lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6">
            <Image src={finance} alt="finance" className="h-[100px] sm:h-[130px] w-auto" />
            <div>
              <h2 className="text-2xl font-bold text-white/80">Problem Solving</h2>
              <p className="text-base sm:text-lg text-white/70 mt-2">Solved 500+ DSA problems across platforms like LeetCode and GFG, with focusing on writing optimized and efficient code.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full col-span-1 sm:col-span-2 lg:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6">
            <Image src={card} alt="card" className="h-[100px] sm:h-[130px] w-auto" />
            <div>
              <h2 className="text-2xl font-bold text-white/80">Core Subjects</h2>
              <p className="text-base sm:text-lg text-white/70 mt-2">Proficient in Data Structures, Algorithms, DBMS, Operating Systems, OOPs, and Computer Networks.</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full col-span-1 sm:col-span-2 lg:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-col sm:flex-row items-center gap-4 p-6">
            <Image src={pc} alt="pc" className="h-[100px] sm:h-[130px] w-auto" />
            <div>
              <h2 className="text-2xl font-bold text-white/80">Web Development</h2>
              <p className="text-base sm:text-lg text-white/70 mt-2">Experienced in building full-stack web applications using React, Node.js, MongoDB, and Express. Developed scalable platforms with features like authentication, real-time updates, and Stripe integration.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
