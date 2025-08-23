import { AiOutlineArrowRight } from 'react-icons/ai';

interface ProjectCardProps {
    title: string;
    description: string;
    label: string;
    link: string;
    fromColor: string;
    toColor: string;
    linkColor: string;
}

export default function ProjectCard({ title, description, label, link, fromColor, toColor, linkColor }: ProjectCardProps) {
    return (
        <div className='flex flex-col'>
                <a className={`block border border-slate-400 dark:border-slate-600 p-3 flex-grow 
                  hover:opacity-80 active:opacity-60 transition-opacity rounded-t-lg bg-cover bg-center
                  bg-gradient-to-br from-${fromColor} to-${toColor}`} >

                    <h4 className="font-ubuntu font-bold text-2xl sm:text-3xl">
                      {title}
                    </h4>
                    <p className="font-sans text-sm mt-2 italic">
                      {description}
                    </p>
                </a>
                <div className="flex items-center justify-center px-4 h-14 space-x-4 bg-slate-600 rounded-b-lg">
                  <a href={link} target="_blank" 
                    className={`font-ubuntu hover:opacity-80 active:opacity-60 transition-opacity px-3 py-1 rounded-full bg-${linkColor} dark:border-white/20`}>
                      {label} <AiOutlineArrowRight />
                  </a>
                </div>
        </div>
    );
}