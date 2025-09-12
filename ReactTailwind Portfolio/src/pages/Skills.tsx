import SkillCard from "@/components/blocks/SkillCard";
import HTML from "@/images/Html.png"
import CSS from "@/images/CssIcon.png"
import JS from "@/images/JsIcon.png"
import ReactLogo from "@/images/ReactIcon.png"
import Tailwind from "@/images/TailwindIcon.png"
import Bootstrap from "@/images/BootstrapIcon.png"
import Git from "@/images/GitIcon.png"
import Github from "@/images/GithubIcon.png"
import Gitlab from "@/images/GitlabIcon.png"
import Ts from "@/images/TsIcon.png"
import FramerMotion from "@/images/FramerMotionIcon.png"
import Gsap from "@/images/GsapIcon.png"
import Jest from "@/images/JestIcon.png"
import Tanstack from "@/images/TanstackIcon.png"
import Next from "@/images/NextIcon.png"

export type Skill = {
  imageSrc: string;
  name: string;
  description: string;
  percent: number;
};

export const skills: Skill[] = [
  {
    imageSrc: HTML,
    name: "HTML",
    description: "Markup language for structuring web content",
    percent: 90,
  },
  {
    imageSrc: CSS,
    name: "CSS",
    description: "Styling language to design modern responsive layouts",
    percent: 85,
  },
  {
    imageSrc: JS,
    name: "JavaScript",
    description: "Core programming language of the web",
    percent: 65,
  },
  {
    imageSrc: ReactLogo,
    name: "React",
    description: "Library for building component-driven UIs",
    percent: 65,
  },
  {
    imageSrc: Tailwind,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for fast design",
    percent: 70,
  },
  {
    imageSrc: Bootstrap,
    name: "Bootstrap",
    description: "Frontend framework with prebuilt responsive components",
    percent: 60,
  },
  {
    imageSrc: Git,
    name: "Git",
    description: "Version control system to track code changes",
    percent: 60,
  },
  {
    imageSrc: Github,
    name: "GitHub",
    description: "Platform to host and collaborate on code repositories",
    percent: 60,
  },
  {
    imageSrc: Gitlab,
    name: "GitLab",
    description: "DevOps platform for git repos and CI/CD",
    percent: 60,
  },
  {
    imageSrc: Ts,
    name: "TypeScript",
    description: "Typed superset of JavaScript for scalable apps",
    percent: 60,
  },
  {
    imageSrc: FramerMotion,
    name: "Framer Motion",
    description: "Animation library for React components",
    percent: 65,
  },
  {
    imageSrc: Gsap,
    name: "GSAP",
    description: "High-performance JavaScript animation library",
    percent: 60,
  },
  {
    imageSrc: Jest,
    name: "Jest",
    description: "Testing framework for JavaScript and TypeScript",
    percent: 50,
  },
  {
    imageSrc: Tanstack,
    name: "TanStack",
    description: "Powerful tools like Query and Table for React apps",
    percent: 65,
  },
  {
    imageSrc: Next,
    name: "Next.js",
    description: "React framework for SSR, SSG, and app directory",
    percent: 60,
  },
];

export type SkillCardProps = Skill;

const Skills = () => {
  return (
    <section className="w-full py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
          My Skills
        </h2>
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3  
            gap-6
          "
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
