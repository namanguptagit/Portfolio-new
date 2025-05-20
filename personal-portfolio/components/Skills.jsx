import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
} from 'react-icons/ri';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const skills = [
  { name: 'React.js', icon: <RiReactjsFill /> },
  { name: 'Next.js', icon: <RiNextjsFill /> },
  { name: 'HTML5', icon: <RiHtml5Fill /> },
  { name: 'CSS 3', icon: <RiCss3Fill /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
  { name: 'Node.js', icon: <RiNodejsFill /> },
];

const Skills = () => {
  return (
    <div>
      <h2 className='h2 mb-8'>My <span className='text-accent'>Skills</span></h2>
      <div className='flex flex-wrap max-w-sm xl:max-w-none gap-6'>
        {skills.map((item, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className='w-16 h-16 flex items-center justify-center rounded-full bg-tertiary/70 group'>
                  <div className='text-3xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className='text-lg'>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  )
};

export default Skills;