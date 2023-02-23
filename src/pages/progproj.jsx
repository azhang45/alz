import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function ProgProj() {
  return (
    
    <main className=' bg-gradient-to-br from-slate-900 to-violet-700 px-10'>
        <section>
            <nav className='py-5 mb-12 flex justify-between'>
                <a className='text-2xl font-ubuntu' href="/">
                <span className=' text-cyan-600'>&lt;</span>alz<span className=' text-cyan-600'>&#47;&gt;</span>
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

            <div className='text-left p-10'>
                <h2 className='text-6xl py-2 text-cyan-400 font-medium font-ubuntu'>Programming Projects</h2>
                <h3 className='text-3xl py-2'>With front-ends that may not be as nice...</h3>
            </div>
        </section>

        <section className='min-h-screen'>
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

            </div>
        </section>
    </main>
  )
}

