export interface Skill {
  name: string;
  iconName: string;
  color?: string;
}

export interface SkillCategory {
  category: "FRONTEND" | "BACKEND" | "TOOLS";
  skills: Skill[];
}

export interface Project {
  index: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  isDownload?: boolean;
}

export interface MenuLink {
  name: string;
  href: string;
  dotColor: string;
}

export interface EducationItem {
  index: string;
  degree: string;
  institution: string;
  period: string;
  badge: string;
  description: string;
  skills: string[];
  current?: boolean;
}

export const PROFILE = {
  name: "MD MARUF HASAN",
  fullName: "Md Maruf Hasan",
  rolePrefix: "FRONTEND",
  roleSuffix: "DEVELOPER",
  email: "14marufhasan14@gmail.com",
  status: "Available for full-time opportunities",
  intro:
    "Junior Frontend Developer focused on crafting pixel-perfect, responsive, and high-performance web interfaces with Next.js, React & Tailwind CSS.",
  quote:
    "I believe in a user-centered design approach, ensuring that every web interface I build is intuitive, accessible, and responsive across all devices.",
  aboutGreeting: "Hi, I'm Md Maruf Hasan.",
  aboutParagraphs: [
    "I'm a dedicated frontend developer passionate about turning designs into fast, interactive, and responsive web experiences. I specialize in React, Next.js, and modern CSS architecture.",
    "Even as an entry-level developer, I treat code quality, semantic HTML, and responsive UI as top priorities. I continuously build real-world projects, learn modern industry standards, and love solving challenging UI problems.",
  ],
};

export const EDUCATION: EducationItem[] = [
  {
    index: "_01",
    degree: "Complete Web Development Course",
    institution: "Programming Hero",
    period: "2024",
    badge: "Professional Training",
    description:
      "Comprehensive web development program mastering modern JavaScript, React, Next.js, Tailwind CSS, backend fundamentals, and practical full-stack application development.",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "REST APIs"],
    current: false,
  },
  {
    index: "_02",
    degree: "B.Sc. in Zoology",
    institution: "National University, Bangladesh",
    period: "2022 – Present",
    badge: "Undergraduate Degree",
    description:
      "Currently pursuing Bachelor of Science in Zoology, studying animal biology, biodiversity, ecology, genetics, and scientific research.",
    skills: ["Animal Biology", "Ecology", "Biodiversity", "Genetics"],
    current: true,
  },
];

export const STATS: Stat[] = [
  { value: "70+", label: "Git Repositories" },
  { value: "3+", label: "Featured Projects" },
  { value: "100%", label: "Responsive & Clean UI" },
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Github", url: "https://github.com/0MarufHasan0" },
  { name: "Linkedin", url: "https://www.linkedin.com/in/md-maruf-hasann/" },
  { name: "Facebook", url: "https://www.facebook.com/share/1CSRTeapaW/" },
  { name: "Resume", url: "/cv.pdf", isDownload: true },
];

export const MENU_LINKS: MenuLink[] = [
  { name: "Home", href: "#home", dotColor: "#F5B800" },
  { name: "About Me", href: "#about", dotColor: "#3B82F6" },
  { name: "Skills", href: "#skills", dotColor: "#14B8A6" },
  { name: "Projects", href: "#projects", dotColor: "#6366F1" },
  { name: "Education", href: "#education", dotColor: "#A855F7" },
  { name: "Contact", href: "#contact", dotColor: "#C6FF00" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "FRONTEND",
    skills: [
      { name: "JavaScript", iconName: "SiJavascript", color: "#F7DF1E" },
      { name: "TypeScript", iconName: "SiTypescript", color: "#3178C6" },
      { name: "React", iconName: "SiReact", color: "#61DAFB" },
      { name: "Next.js", iconName: "SiNextdotjs", color: "#FFFFFF" },
      { name: "Tailwind CSS", iconName: "SiTailwindcss", color: "#06B6D4" },
      { name: "HeroUI", iconName: "SiNextui", color: "#0072F5" },
      { name: "shadcn/ui", iconName: "SiShadcnui", color: "#FFFFFF" },
    ],
  },
  {
    category: "BACKEND",
    skills: [
      { name: "Node.js", iconName: "SiNodedotjs", color: "#5FA04E" },
      { name: "Express.js", iconName: "SiExpress", color: "#FFFFFF" },
      { name: "MongoDB", iconName: "SiMongodb", color: "#47A248" },
      { name: "Better Auth", iconName: "ShieldCheck", color: "#FF5722" },
      { name: "REST API", iconName: "TbApi", color: "#C6FF00" },
    ],
  },
  {
    category: "TOOLS",
    skills: [
      { name: "Git", iconName: "SiGit", color: "#F05032" },
      { name: "GitHub", iconName: "SiGithub", color: "#FFFFFF" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    index: "_01",
    title: "Bajar Dor",
    tags: ["Next.js", "React", "Tailwind CSS", "HeroUI", "Better Auth"],
    description:
      "Modern real-time daily grocery and commodity price tracking web application built with Next.js, HeroUI, Better Auth, and Tailwind CSS.",
    image: "/projects/bajar-dor.png",
    githubUrl: "https://github.com/0MarufHasan0/bajar-dor-new",
    liveUrl: "https://bajar-dor-eight.vercel.app/",
  },
  {
    index: "_02",
    title: "Qurbani Hat",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HeroUI",
      "Better Auth",
      "MongoDB",
      "React Hook Form",
      "React Toastify",
      "React Spring",
      "React Fast Marquee",
      "Vercel",
    ],
    description:
      "Modern full-stack marketplace for browsing, booking, and selling healthy Qurbani animals online with secure authentication, seller verification, and dynamic pricing.",
    image: "/projects/qurbani-hat.png",
    githubUrl: "https://github.com/0MarufHasan0/qurbanihat",
    liveUrl: "https://qurbanihat-pi.vercel.app/",
  },
  {
    index: "_03",
    title: "My FitLog",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "Lucide React",
      "React Loading Skeleton",
    ],
    description:
      "A modern workout library and planning app for discovering exercises, building a daily workout plan, and tracking your training.",
    image: "/projects/my-fitlog.png",
    githubUrl: "https://github.com/0MarufHasan0/my-fitlog",
    liveUrl: "https://my-fitlog-eosin.vercel.app/",
  },
];
