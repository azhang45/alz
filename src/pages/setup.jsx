import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Image from 'next/image';
import fullsetup from 'public/fullsetup.jpg';

export default function Setup() {
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
                    <li>
                        <a className='bg-gradient-to-br from-blue-700 to-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="#">
                        Resume
                        </a>
                    </li>
                    </ul>
                </nav>

                <div className='text-left p-10'>
                    <h2 className='text-6xl py-2 text-cyan-400 font-medium font-ubuntu'>My Setup</h2>
                    <h3 className='text-white text-3xl py-2'>Where all the magic happens.</h3>
                </div>

                <div className='relative flex justify-center mx-auto py-2 xl:px-72'>
                    <Image src={fullsetup} className='h-auto max-w-full'/>
                </div>
            </section>

            <section className='py-3'>
                <div className='text-left py-2 px-1 md:px-1'>
                    <h2 className='text-5xl py-2 text-cyan-400 font-medium font-ubuntu'>
                        PC
                    </h2>
                    <h3 className='text-white text-3xl py-2'>
                        Custom-built PC using the following parts:
                    </h3>
                    <div className='px-3 md:px-10 text-2xl text-cyan-300'>
                        <li>
                            Case: <span className=' text-white'>NZXT H510 Elite White</span>
                        </li>
                        <li>
                            CPU: <span className=' text-white'>Ryzen 7 3700x</span>
                        </li>
                        <li>
                            GPU: <span className=' text-white'>MSI GeForce RTX 3060 Gaming X Trio 12G</span>
                        </li>
                        <li>
                            Motherboard: <span className=' text-white'>MSI B450 Tomahawk Max</span>
                        </li>
                        <li>
                            RAM: <span className=' text-white'>G.Skill RipJaws V 16GB (2 x 8GB) DDR4-3200 CL16</span>
                        </li>
                        <li>
                            Power supply: <span className=' text-white'>EVGA 80+ Bronze 600W</span>
                        </li>
                        <li>
                            Storage: <span className=' text-white'>ADATA SX8200 512GB</span>
                        </li>
                    </div>

                </div>

                <div className='text-left py-8 px-1 md:px-1'>
                    <h2 className='text-5xl py-2 text-cyan-400 font-medium font-ubuntu'>
                        Keyboard
                    </h2>
                    <h3 className='text-white text-3xl py-2'>
                        Custom-built mechanical keyboard using the following parts:
                    </h3>
                    <div className='px-3 md:px-10 text-2xl text-cyan-300'>
                        <li>
                            Case: <span className=' text-white'>KBD67 Lite R4 Justice Blue Wireless ANSI Layout</span>
                        </li>
                        <li>
                            Swtiches: <span className=' text-white'>Gateron Milky Yellow Pros lubed with Krytox 205g0 and filmed</span>
                        </li>
                        <li>
                            Stabilizers: <span className=' text-white'>DUROCK V2 PCB Mount Screw-in Stabilizers</span>
                        </li>
                        <li>
                            Keycaps: <span className=' text-white'>SoulCat To the Universe Dye-Subbed Cherry Profile PBT Keycaps</span>
                        </li>
                        <li>
                            Mods: <span className=' text-white'>PE foam mod, tape mod, holee mod</span>
                        </li>
                        <li>
                            Cable: <span className=' text-white'>Custom blue coiled cable</span>
                        </li>
                        
                    </div>
                </div>
                
                <div className='text-left py-8 px-1 md:px-1'>
                    <h2 className='text-5xl py-2 text-cyan-400 font-medium font-ubuntu'>
                        Peripherals
                    </h2>
                    <h3 className='text-white text-3xl py-2'>
                        Other parts of the setup:
                    </h3>
                    <div className='px-3 md:px-10 text-2xl text-cyan-300'>
                        <li>
                            Monitor: <span className=' text-white'>Dell 240Hz 24.5 Inch Full HD IPS Panel S2522HG</span>
                        </li>
                        <li>
                            Mouse: <span className=' text-white'>Glorious Model O- Wireless White</span>
                        </li>
                        <li>
                            Headphones: <span className=' text-white'>HyperX Cloud Alpha, Audio-Technica ATH-M30x for music production</span>
                        </li>
                        <li>
                            Microphone: <span className=' text-white'>Piy Painting USB Microphone with boom arm</span>
                        </li>
                        <li>
                            Webcam: <span className=' text-white'>AUKEY PC-LM1E 1080P Webcam</span>
                        </li>
                        <li>
                            Speakers: <span className=' text-white'>Creative Pebble V3 2.0 Speakers</span>
                        </li>
                        <li>
                            MIDI Keyboard: <span className=' text-white'>AKAI MPK Mini MK3 25 Keys</span>
                        </li>
                    </div>
                </div>

            </section>
          </main>
    )
  }
