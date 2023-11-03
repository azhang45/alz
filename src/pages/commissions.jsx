import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from 'next/image';
import commission1 from 'public/commission1.jpg';

export default function Commissions() {
    return (
        <main className=' bg-gradient-to-br from-slate-900 to-violet-700 px-10'>
            <section className='min-h-screen'>
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

                <div className='text-left p-10'>
                    <h2 className='text-6xl py-2 text-cyan-400 font-medium font-ubuntu'>Keyboard Commissions</h2>
                    <h3 className='text-white text-3xl py-2'>Email me for more information.</h3>
                </div>

                

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="lg:w-2/3 mx-auto">
                        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                            <Image fill={true} alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={commission1}/>
                            <div className="text-center relative z-10 w-full">
                            <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                            <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <Image fill={true} alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={commission1}/>
                                <div className="text-center relative z-10 w-full">
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>
                            </div>
                            <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <Image fill={true} alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={commission1}/>
                                <div className="text-center relative z-10 w-full">
                                <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                <p className="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>


            </section>
          </main>
    )
  }
