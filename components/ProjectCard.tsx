import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ProjectCardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
  stack?: string;
  link?: string;
  github?: string;
  theme?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { 
    title, 
    description, 
    children, 
    className,  
    link, 
    github, 
  } = props;

  return (
    <div className={twMerge("border-2 p-4 rounded-lg shadow-lg flex flex-col min-h-[400px]", className)}>
      {/* Image/children container */}
      <div className="flex-shrink-0">{children}</div>
      
      {/* Content container */}
      <div className="flex-grow text-center">
        <h3 className="text-3xl font-semibold mt-6">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
      
      {/* Button container - will stay at bottom */}
      <div className="flex justify-between mt-auto pt-4">
        {link && (
          <button className="border-2 py-2 px-3 hover:backdrop-brightness-90">
            <Link href={link} target="_blank">Demo</Link>
          </button>
        )}
        {github && (
          <button className="border-2 py-2 px-3  hover:backdrop-brightness-90">
            <Link href={github} target="_blank" className="flex items-center gap-2">
              View in Github <SquareArrowOutUpRight size={15}/>
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;