import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiMysql,
  SiPython,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiRender,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import {
  TbBinaryTree,
  TbApi,
  TbBrain,
  TbLayoutDashboard,
  TbShieldLock,
} from "react-icons/tb";

export const skillCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "#f08a3c" },
      { name: "Python", icon: SiPython, color: "#3776ab" },
      { name: "JavaScript", icon: SiJavascript, color: "#e8b923" },
    ],
  },

  {
    label: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#0d9dc7" },
      { name: "HTML5", icon: SiHtml5, color: "#e34c26" },
      { name: "CSS3", icon: SiCss, color: "#2965f1" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0891b2" },
    ],
  },

  {
    label: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#4d9c3f" },
      { name: "Express.js", icon: SiExpress, color: "#4a4439" },
      { name: "MongoDB", icon: SiMongodb, color: "#3f9142" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "REST API", icon: TbApi, color: "#0e7ea8" },
      { name: "JWT", icon: TbShieldLock, color: "#1a9c50" },
    ],
  },

  {
    label: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "#f1502f" },
      { name: "GitHub", icon: SiGithub, color: "#1c1a17" },
      { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      { name: "Firebase", icon: SiFirebase, color: "#e0a800" },
      { name: "Vercel", icon: SiVercel, color: "#1c1a17" },
      { name: "Render", icon: SiRender, color: "#0f9d78" },
    ],
  },

  {
    label: "Concepts",
    skills: [
      { name: "DSA", icon: TbBinaryTree, color: "#6d5bd0" },
      { name: "System Design", icon: TbLayoutDashboard, color: "#c07a12" },
      { name: "GenAI", icon: TbBrain, color: "#7c3aed" },
    ],
  },
];

export const skills = skillCategories.flatMap(
  (category) => category.skills
);