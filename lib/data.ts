import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Flow.png";
import rmtdevImg from "@/public/Flow2.png";
import wordanalyticsImg from "@/public/Bug.png";
import wordanalyticsImg2 from "@/public/Movie.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Noida, U.P",
    description:
      "I graduated in Bachelor of Technology as Electronics Engineer. Being an Engineer is like wearing many hats, you must execute yourself in your specilization/technology but also must be a jack of all trades",
    icon: React.createElement(LuGraduationCap),
    date: "10/2021",
  },
  {
    title: "Full-Stack Web Developer",
    location: "Ericsson, Noida",
    description:
      "I worked as a Full-Stack developer for 1.5 years in Discover FLOW Project for the main website. I specialized in MERN Stack.",
    icon: React.createElement(CgWorkAlt),
    date: "12/2021 - 06/2023",
  },
  {
    title: "Mobile Developer",
    location: "Ericsson, Noida",
    description:
      "I'm now a React-Native Mobile developer working for the same project for the mobile app FLOW Self Care.",
    icon: React.createElement(FaReact),
    date: "06/2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Discover Flow",
    description:
      "I worked as a full-stack developer on this project in Ericsson for 1.5 years. Caribbean Users can topup their Flow SIM & purchase Mobiles (e-commerce).",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma", "Stripe"],
    imageUrl: corpcommentImg,
    buttonLink: null,
    github: null,
  },
  {
    title: "Flow Self Care",
    description:
      "I currently work as Developer for a Top-Up, Bill payments and Funds Transfering Android / IOS app in React-Native.",
    tags: ["React-Native", "Firebase", "Nativewind", "Redux", "Stripe"],
    imageUrl: rmtdevImg,
    buttonLink: null,
    github: null,
  },
  {
    title: "Bug Tracker",
    description:
      "Inspired from Jira, this tool lets you create a problem ticket for your project and your team for Collaboration.",
    tags: ["React", "JWT", "MongoDB", "Tailwind", "Express", "Node"],
    github: "https://github.com/arsh-meharwal/bug-tracker-app-backend",
    buttonLink: "https://bug-tracker-orange.vercel.app",
    imageUrl: wordanalyticsImg,
  },
  {
    title: "MovieBazz",
    description:
      "Delve into world of cinema. Get daily trending Movies / Shows, top rated content of all time and more",
    tags: ["React-Native", "AppWrite", "NativeWind", "React"],
    github: "https://github.com/arsh-meharwal/moviebazz-master",
    buttonLink: null,
    imageUrl: wordanalyticsImg2,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React-Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Firebase",
  "AppWrite",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
