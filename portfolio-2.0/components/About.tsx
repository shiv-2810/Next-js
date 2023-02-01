import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto 
    items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{opacity:1, x:0}}
        // viewport={{once:true}}
        transition={{duration:1.2}}
        src='/images/about.JPG'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[500px]'
        />
        <div className='flex flex-col space-y-10  px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
            <p className='text-base'>Hi, I'm Shivam Kumar, a skilled and enthusiastic React Native Developer with a passion for creating seamless mobile experiences. I have a strong foundation in React Native, JavaScript, and other related technologies, allowing me to develop high-performance and visually appealing mobile applications. My experience has given me the ability to work with cross-functional teams, manage complex projects, and produce high-quality code that meets the requirements and exceeds expectations. I'm constantly learning and exploring new technologies to stay ahead of the curve, and I'm eager to bring my skills and experience to new and challenging projects. Let's create something amazing together!</p>
        </div>
    </motion.div>
  )
}

export default About