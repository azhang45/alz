import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import ProjectCard from '../components/ProjectCard';

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
                <ProjectCard
                    title="Sunshine Housing"
                    description="Apartment search and user management website developed for Sunshine Living."
                    label="sunshine-housing.com"
                    link="https://sunshine-housing.com"
                    fromColor="yellow-400"
                    toColor="sky-600"
                    linkColor="lime-600"
                />

                {/* project 2 */}
                <ProjectCard
                    title="YourBCABus"
                    description="Bus-location tracker developed for the ease of BCA students. A Yenowa project."
                    label="yourbcabus.com"
                    link="https://about.yourbcabus.com"
                    fromColor="emerald-900"
                    toColor="emerald-500"
                    linkColor="emerald-600"
                />

                {/* project 3 */}
                <ProjectCard
                    title="TableJet"
                    description="Teacher attendance app to easily notify BCA students for when their teachers are absent. A Yenowa project."
                    label="tbj.yourbcabus.com"
                    link="https://tbj.yourbcabus.com"
                    fromColor="purple-600"
                    toColor="slate-950"
                    linkColor="violet-950"
                />
                
                {/* project 4 */}
                <ProjectCard
                    title="T-Res"
                    description="3D version of the Google Chrome dinosaur game, made in Unity3D."
                    label="github.com"
                    link="https://github.com/azhang45/T-Res"
                    fromColor="sky-800"
                    toColor="yellow-500"
                    linkColor="teal-700"
                />

                {/* project 5 */}
                <ProjectCard
                    title="Mare by Alsky"
                    description="Website that converts user-uploaded images into line art."
                    label="github.com"
                    link="https://github.com/azhang45/Mare"
                    fromColor="slate-800"
                    toColor="blue-900"
                    linkColor="blue-900"
                />

                {/* project 6 */}
                <ProjectCard
                    title="Datestamp Adder"
                    description="Website that uses image metadata to add the date and/or time stamp on user-uploaded images."
                    label="github.com"
                    link="https://github.com/kna27/datestamp-adder"
                    fromColor="zinc-600"
                    toColor="amber-500"
                    linkColor="yellow-600"
                />

                {/* project 7 */}
                <ProjectCard
                    title="Tacto.Ink"
                    description="Braille inscriber that automatically converts English text to braille writing; won UPENN M&TSI Most Innovative award."
                    label="devpost.com"
                    link="https://mtsi2023.devpost.com"
                    fromColor="sky-900"
                    toColor="slate-500"
                    linkColor="sky-800"
                />

                {/* project 8 */}
                <ProjectCard
                    title="Concerndle"
                    description="Wordle Discord bot, but with an almost impossible twist (may be outdated due to Discord updates)."
                    label="github.com"
                    link="https://github.com/azhang45/Concerndle"
                    fromColor="green-800"
                    toColor="yellow-500"
                    linkColor="lime-600"
                />
            </div>
        </section>
    </main>
  )
}

