import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/bs';

export default function ProgProj() {
  return (
    
    <main className=' bg-gradient-to-br from-slate-900 to-violet-700 px-10'>
        <section>
            <nav className='py-5 mb-12 flex justify-between'>
                <a className='text-white text-2xl font-ubuntu' href="/">
                <span className=' text-cyan-600'>&lt;</span>alz<span className=' text-cyan-600'>&#47;&gt;</span>
                </a>
                <ul className='flex items-center'>
                <li>
                    <BsFillMoonStarsFill className='text-white cursor-pointer text-2xl'/>
                </li>
                {/* <li>
                    <a className='bg-gradient-to-br from-blue-700 to-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="/commissions">
                    Keyboard Commissions
                    </a>
                </li> */}
                </ul>
            </nav>

            <div className='text-left py-3 px-1 md:px-8'>
                <h2 className='text-6xl py-1 text-cyan-400 font-medium font-ubuntu'>Programming Projects</h2>
                <h3 className='text-white text-3xl py-2'>With front-ends that may not be as nice...</h3>
            </div>
        </section>

        <section className='min-h-screen'>
            <div className='text-white py-10 px-16 md:px-32 xl:px-44 grid md:grid-cols-2 xl:grid-cols-4 gap-6'>

                {/* project 1 */}
                <article className='flex flex-col'>
                    <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                    hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                    bg-gradient-to-br from-yellow-400 to-sky-600" >

                        <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                        Sunshine Housing
                        </h4>
                        <p className="font-sans text-sm mt-2 italic">
                        Apartment search and user management website developed for Sunshine Living.
                        </p>
                    </a>
                    <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                    <a href="https://sunshine-housing.com" target="_blank" 
                        className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-yellow-500 dark:border-white/20">
                        sunshine-housing.com <AiOutlineArrowRight />
                    </a>
                    </div>
                </article>

                {/* project 2 */}
                <article className='flex flex-col'>
                    <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                    hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                    bg-gradient-to-br from-emerald-900 to-emerald-500" >

                        <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                        YourBcaBus
                        </h4>
                        <p className="font-sans text-sm mt-2 italic">
                        Bus-location tracker developed for the ease of BCA students. A Yenowa project.
                        </p>
                    </a>
                    <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                    <a href="https://about.yourbcabus.com" target="_blank" 
                        className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-emerald-600 dark:border-white/20">
                        yourbcabus.com <AiOutlineArrowRight />
                    </a>
                    </div>
                </article>

                {/* project 3 */}
                <article className='flex flex-col'>
                    <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                    hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                    bg-gradient-to-br from-purple-600 to-slate-950" >

                        <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                        TableJet
                        </h4>
                        <p className="font-sans text-sm mt-2 italic">
                        Teacher attendance app to easily notify BCA students for when their teachers are absent. A Yenowa project.
                        </p>
                    </a>
                    <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                    <a href="https://tablejet.app" target="_blank" 
                        className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-violet-950 dark:border-white/20">
                        tablejet.app <AiOutlineArrowRight />
                    </a>
                    </div>
                </article>

                {/* project 4 */}
                <article className='flex flex-col'>
                    <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                    hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                    bg-gradient-to-br from-sky-800 to-yellow-500" >

                        <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                        T-Res
                        </h4>
                        <p className="font-sans text-sm mt-2 italic">
                        3D version of the Google Chrome dinosaur game, made in Unity3D.
                        </p>
                    </a>
                    <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                        <a href="https://github.com/azhang45/T-Res" target="_blank" 
                            className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-teal-700 dark:border-white/20">
                            github.com <AiOutlineArrowRight />
                        </a>
                    </div>
                </article>

                {/* project 5 */}
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

                {/* project 6 */}
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

                {/* project 7 */}
                <article className='flex flex-col'>
                    <a className="block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                    hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                    bg-gradient-to-br from-sky-900 to-slate-500" >

                        <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                        Tacto.Ink
                        </h4>
                        <p className="font-sans text-sm mt-2 italic">
                        Braille inscriber that automatically converts English text to braille writing; won UPENN M&TSI Most Innovative award.
                        </p>
                    </a>
                    <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                    <a href="https://mtsi2023.devpost.com" target="_blank" 
                        className="font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-sky-800 dark:border-white/20">
                        devpost.com <AiOutlineArrowRight />
                    </a>
                    </div>
                </article>

                {/* project 8 */}
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

            </div>
        </section>
    </main>
  )
}

