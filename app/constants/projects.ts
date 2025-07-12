export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  color: string;
  accent: string;
  iconName: 'Palette' | 'Code' | 'Zap' | 'Star' | 'Atom' | 'ChartPie' | 'Gem' | 'Flame';
  url: string;
}

export const projects: Project[] = [
    {
        title: "<Art.Barbers />", 
        description: "A website for a top class barbing salon to deliver exquisite styling to their clients.",
        tech: ["Next.js", "Tailwind", "Resend", "GSAP"],
        category: "Frontend",
        color: "from-purple-400 to-pink-400",
        accent: "bg-purple-100",
        iconName: 'Palette',
        url: "https://artdotbarbers.io"
    },
    {
        title: "<Layers />", 
        description: "A side project for a design SaaS landing page. Beautifully designed and built with amazing animations using framer-motion.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        category: "Front end",
        color: "from-blue-400 to-cyan-400",
        accent: "bg-blue-100",
        iconName: 'Code',
        url: "https://layers-tawny.vercel.app"
    },
    {
        title: "<Art.Quarters />", 
        description: "A website for a vibrant hub where artistic expression meets community spirit. They offers a unique blend of experiences designed to nurture your creativity and well-being. Explore their diverse offerings and discover a space that inspires and empowers you.",
        tech: ["Next.js", "Tailwind", "GSAP"],
        category: "Frontend",
        color: "from-purple-400 to-cyan-400",
        accent: "bg-yellow-100",
        iconName: 'Gem',
        url: "https://artdotquarter.io"
    },
    {
        title: "<Wedding Invite />", 
        description: "This is a full stack application for a wedding invitation. Wedding planners can use this app to track exactly the number of guests they would have and in turn plan ahead effectively.",
        tech: ["Next.js", "Tailwind", "Supabase", "Resend"],
        category: "Full stack",
        color: "from-green-400 to-emerald-400",
        accent: "bg-green-100",
        iconName: 'Zap',
        url: "https://senior-wedding.vercel.app"
    },
    {
        title: "<Post it API />", 
        description: "A simple social media API built with Node.js, TypeScript, Express, and Prisma. Features include user management, posts, and comments with soft-delete functionality. It was containerized using Docker for consistent development and deployment.",
        tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "Docker", "Typescript"],
        category: "Back end",
        color: "from-orange-400 to-red-400",
        accent: "bg-orange-100",
        iconName: 'Star',
        url: "https://github.com/Copstud3/post-it-app"
    },
    {
        title: "<Cryptonautt />", 
        description: "A crypto portfolio made for a web3 strategist to appear professional and presentable to their investors. It features a beautiful, dark UI, and it is built with Next.js, Tailwind CSS, and Resend for email notifications.",
        tech: ["Next.js", "Tailwind", "Resend"],
        category: "Front end",
        color: "from-purple-400 to-pink-400",
        accent: "bg-red-100",
        iconName: 'Flame',
        url: "https://cryptonautt.vercel.app"
    },
    {
        title: "<QuickMed />", 
        description: "A side frontend project for a medical appointment booking app. It features a beautiful, responsive design with a focus on user experience.",
        tech: ["React", "Tailwind", "AOS"],
        category: "Front end",
        color: "from-[#358926] to-[#d7de50]", 
        accent: "bg-lime-100",
        iconName: 'Atom',
        url: "https://quickmed-nine.vercel.app/"
    },
    {
        title: "<Github Reporter AI Agent />", 
        description: "An AI agent that generates a report of your GitHub profile and activity, including commits, pull requests, and issues. I used the Mastra framework to create a custom agent that interacts with the GitHub API.",
        tech: ["Typescript", "Mastra", "Ollama", "Docker", "Solana", "Github"],
        category: "Back end",
        color: "from-[#42275a] to-[#734b6d]",
        accent: "bg-orange-100",
        iconName: 'ChartPie',
        url: "https://github.com/Copstud3/agent-challenge"
    },
    {
        title: "<PetPals Haven />", 
        description: "A side project for a pet adoption platform. It features a beautiful, responsive design with a focus on user experience.",
        tech: ["Next.js", "Tailwind", "Shadcn UI"],
        category: "Front end",
        color: "from-[#FDC830] to-[#F37335]",
        accent: "bg-pink-100",
        iconName: 'Code',
        url: "https://www.petpalshaven.com.ng/"
    },
];