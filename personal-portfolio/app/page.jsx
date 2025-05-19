"use client"
import { motion } from 'framer-motion';
import Blob from '@/components/Blob';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import avatarImg from '@/public/assets/avatar.png';
import {MdArrowOutward} from 'react-icons/md';
import {HiOutlinePhone, HiOutlineMail} from 'react-icons/hi';

const Home = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={
                    {
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }} className='h-screen flex items-center'>
      <div className='flex flex-col xl:flex-row items-center justify-between w-full'>
        <div className='w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left'>
          <h1 className='h1 flex-1 mb-[28px]'>Hi! I'm Naman, <br />
            <TypeAnimation sequence={["Web Developer", 2000, "Web Designer", 2000]}
              wrapper="span" speed={40} className='text-accent' repeat={Infinity} cursor={false} />
          </h1>
          <p className='max-w-[500px] mb-[44px]'>I build visually captivating, user-friendly websites and web apps that transform your ideas into seamless, engaging digital experiences.</p>
          <button className='btn btn-lg btn-accent mb-16'>
            <div className='flex items-center gap-3'>
              <span>
                Let's talk.
              </span>
              <MdArrowOutward className='text-xl'/>
            </div>
          </button>
          <div className='flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 '>
            <div className='flex items-center gap-4 text-lg'>
              <span className='text-accent'>
                <HiOutlinePhone className='text-xl' />
              </span>
              <span>+91 75 00 44 79 56</span>
            </div>
            <div className='flex items-center gap-4 text-lg'>
              <span className='text-accent'>
                <HiOutlineMail className='text-xl' />
              </span>
              <span>naman312000@gmail.com</span>
              </div>
          </div>
        </div>
        <div className='hidden xl:block flex-1 relative z-20'>
          <Blob containerStyles="w-[560px] h-[560px]" />
          <Image src={avatarImg} alt='' width={440} height={600} quality={100} className='absolute -top-16 left-[120px]' />
          <div className='w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40'></div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home