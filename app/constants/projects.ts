export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string;
  color: string;
  accent: string;
  iconName:
    | "Palette"
    | "Code"
    | "Zap"
    | "Star"
    | "Atom"
    | "ChartPie"
    | "Gem"
    | "Flame";
  url: string;
}

export const projects: Project[] = [
  {
    title: "Art.Barbers",
    description: "A website for a top-class barbing salon.",
    tech: ["Next.js", "Tailwind", "Resend", "GSAP"],
    category: "Frontend",
    color: "from-purple-400 to-pink-400",
    accent: "bg-purple-100",
    iconName: "Palette",
    url: "https://artdotbarbers.io",
  },
  {
    title: "Layers",
    description: "A design SaaS landing page with amazing animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Front end",
    color: "from-blue-400 to-cyan-400",
    accent: "bg-blue-100",
    iconName: "Code",
    url: "https://layers-tawny.vercel.app",
  },
  {
    title: "Art.Quarters",
    description: "A hub for artistic expression and community events.",
    tech: ["Next.js", "Tailwind", "GSAP"],
    category: "Frontend",
    color: "from-purple-400 to-cyan-400",
    accent: "bg-yellow-100",
    iconName: "Gem",
    url: "https://artdotquarter.io",
  },
  {
    title: "Wedding Invite",
    description: "A full-stack app for wedding planners to track guest counts.",
    tech: ["Next.js", "Tailwind", "Supabase", "Resend"],
    category: "Full stack",
    color: "from-green-400 to-emerald-400",
    accent: "bg-green-100",
    iconName: "Zap",
    url: "https://senior-wedding.vercel.app",
  },
  {
    title: "Post it API",
    description:
      "A social media API with user management, posts, and comments.",
    tech: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Typescript",
    ],
    category: "Back end",
    color: "from-orange-400 to-red-400",
    accent: "bg-orange-100",
    iconName: "Star",
    url: "https://github.com/Copstud3/post-it-app",
  },
  {
    title: "Cryptonautt",
    description: "A crypto portfolio with dark UI for web3 strategists.",
    tech: ["Next.js", "Tailwind", "Resend"],
    category: "Front end",
    color: "from-purple-400 to-pink-400",
    accent: "bg-red-100",
    iconName: "Flame",
    url: "https://cryptonautt.vercel.app",
  },
  {
    title: "QuickMed",
    description: "A medical appointment booking app with responsive design.",
    tech: ["React", "Tailwind", "AOS"],
    category: "Front end",
    color: "from-[#358926] to-[#d7de50]",
    accent: "bg-lime-100",
    iconName: "Atom",
    url: "https://quickmed-nine.vercel.app/",
  },
  {
    title: "Github Reporter AI Agent",
    description: "An AI agent that generates reports from GitHub profiles.",
    tech: ["Typescript", "Mastra", "Ollama", "Docker", "Solana", "Github"],
    category: "Back end",
    color: "from-[#42275a] to-[#734b6d]",
    accent: "bg-orange-100",
    iconName: "ChartPie",
    url: "https://github.com/Copstud3/agent-challenge",
  },
  {
    title: "PetPals Haven",
    description: "A pet adoption platform with responsive design.",
    tech: ["Next.js", "Tailwind", "Shadcn UI"],
    category: "Front end",
    color: "from-[#FDC830] to-[#F37335]",
    accent: "bg-pink-100",
    iconName: "Code",
    url: "https://www.petpalshaven.com.ng/",
  },
];
