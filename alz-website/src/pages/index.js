import Head from 'next/head';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillMail,
  AiOutlineArrowDown, AiOutlineArrowRight} from 'react-icons/ai';
import Image from 'next/image';
//import keyboard from 'C:/Users/alice/OneDrive/personal-projects/alz/alz-website/public/keyboard.png';
import keyboard from 'public/keyboard.png';
import ybb from 'public/ybb2.png';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {useRef} from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <Head>
        <title>Alice Zhang Personal Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-gradient-to-br from-slate-900 to-violet-700 px-10'>
        <section className='min-h-screen'>
          <nav className='py-5 mb-12 flex justify-between'>
            <a className='text-2xl font-ubuntu' href="">
              alz
            </a>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className='bg-gradient-to-br from-blue-700 to-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-6xl py-2 text-cyan-400 font-medium font-ubuntu'>Alice Zhang</h2>
            <h3 className='text-3xl py-2'>Developer, engineer, and songwriter.</h3>
            <p className='text-lg py-5 leading-8 text-gray-300'>
              Driven high school student with a passion for creating things.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-300'>
            <a href='https://github.com/azhang45'> <AiFillGithub /> </a>
            <a href='https://www.linkedin.com/in/alice-zhang-994145247/'><AiFillLinkedin /></a>
            <a href='mailto:alicenz0063@gmail.com'><AiFillMail /></a>
          </div>

          {/* <div className='relative flex justify-center mx-auto py-10'>
            <Image src={keyboard} />
          </div> */}
          <div>
            <h2 className='font-ubuntu text-cyan-700 opacity-80 flex justify-center py-3'><em>Click the space bar in the below image for a surprise!</em></h2>
          </div>

          <div className='relative flex justify-center mx-auto py-5'>
            <Image src = {keyboard} alt = "useMap" useMap = "#spacebar"/>
            <map name = "spacebar">
              <area shape = "rect" coords = "140,130,333,162" alt = "_blank"
                  href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" target = "_blank" />
              
            </map>
          </div>


          <div className='text-5xl flex justify-center text-cyan-300'>
            <AiOutlineArrowDown className={styles.downarrow} onClick={handleClick} />
          </div>

        </section>

        <section className='py-10'>
          <div>
            <h3 ref={ref} className='text-3xl font-ubuntu bg-zinc-700 px-9 py-1 pr-60 bg-opacity-60 
              text-left rounded-br-full rounded-tl-full text-gray-300' style={{display: "inline"}}>
              <span className='text-sky-400'>alz@DESKTOP-123456:~$</span> cd programming-projects
            </h3>
          </div>

          {/* grid of prog projects */}
          <div>
            <div className='py-10 px-32 grid md:grid-cols-2 xl:grid-cols-4 gap-6'>

              {/* project 1 */}
              <article className='flex flex-col'>
                <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                  hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                  bg-gradient-to-br from-emerald-900 to-emerald-500" >

                    <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                      YourBcaBus
                    </h4>
                    <p className="font-sans text-sm mt-2 italic">
                      Bus-location tracker developed for the ease of BCA students.
                    </p>
                </a>
                <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                  <a href="https://about.yourbcabus.com" target="_blank" 
                    className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-emerald-600 dark:border-white/20">
                      yourbcabus.com <AiOutlineArrowRight />
                  </a>
                </div>
              </article>

              {/* project 2 */}
              <article className='flex flex-col'>
                <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                  hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                  bg-gradient-to-br from-slate-800 to-blue-900" >

                    <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                      Mare by Alsky
                    </h4>
                    <p className="font-sans text-sm mt-2 italic">
                      Website that converts user-uploaded images into line art.
                    </p>
                </a>
                <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                  <a href="https://github.com/azhang45/Mare" target="_blank" 
                    className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-blue-900 dark:border-white/20">
                      github.com <AiOutlineArrowRight />
                  </a>
                </div>
              </article>

              {/* project 3 */}
              <article className='flex flex-col'>
                <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                  hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                  bg-gradient-to-br from-green-800 to-yellow-500" >

                    <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                      Concerndle
                    </h4>
                    <p className="font-sans text-sm mt-2 italic">
                      Wordle Discord bot, but with an almost impossible twist (may be outdated due to Discord updates).
                    </p>
                </a>
                <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                  <a href="https://github.com/azhang45/Concerndle" target="_blank" 
                    className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-lime-600 dark:border-white/20">
                      github.com <AiOutlineArrowRight />
                  </a>
                </div>
              </article>

              {/* project 4 */}
              <article className='flex flex-col'>
                <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                  hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                  bg-gradient-to-br from-zinc-600 to-amber-500" >

                    <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                      Datestamp Adder
                    </h4>
                    <p className="font-sans text-sm mt-2 italic">
                      Website that uses image metadata to add the date and/or time stamp on user-uploaded images.
                    </p>
                </a>
                <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                  <a href="https://github.com/kna27/datestamp-adder" target="_blank" 
                    className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-yellow-600 dark:border-white/20">
                      github.com <AiOutlineArrowRight />
                  </a>
                </div>
              </article>

              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer">
                <h2 className={inter.className}>
                  <em>See more <span>-&gt;</span></em>
                </h2>
              </a>
            </div>
          </div>
        </section>

        <section className='pb-10'>
          <div>
            <h3 className='text-3xl font-ubuntu bg-zinc-700 px-9 py-1 pr-60 bg-opacity-60 
              text-left rounded-br-full rounded-tl-full text-gray-300' style={{display: "inline"}}>
              <span className='text-sky-400'>alz@DESKTOP-123456:~$</span> cd other-projects
            </h3>
          </div>
        </section>

      </main>
    </div>
  )
}
