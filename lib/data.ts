import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Flow.png";
import rmtdevImg from "@/public/Flow2.png";
import max from "@/public/maxmol.png";
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
      "I worked as a Full-Stack developer for in Discover FLOW Project for the main website. I specialized in MERN Stack.",
    icon: React.createElement(CgWorkAlt),
    date: "12/2021 - 07/2023",
  },
  {
    title: "Full Stack Mobile Developer",
    location: "Ericsson, Noida",
    description:
      "Worked as React-Native Mobile developer working for the same project for the mobile app FLOW Self Care.",
    icon: React.createElement(FaReact),
    date: "07/2023 - present",
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
    title: "Maxmol",
    description:
      "An E-Commerce Android/iOS app that I deployed for my client, a famous YouTuber 'Microwave Nagal'.",
    tags: ["React-Native", "Appwrite", "Nativewind", "Razorpay"],
    imageUrl: max,
    buttonLink: "https://play.google.com/store/apps/details?id=com.anonymous.ecommerce",
    github: "https://github.com/arsh-meharwal/Maxmol",
  },
  
  {
    title: "Moviebaaz",
    description:
      "Delve into world of cinema. Get daily trending Movies / Shows, top rated content of all time and more",
    tags: ["React-Native", "AppWrite", "NativeWind", "React"],
    github: "https://github.com/arsh-meharwal/moviebazz-master",
    buttonLink: null,
    imageUrl: wordanalyticsImg2,
  },{
    title: "Bug Tracker",
    description:
      "Inspired from Jira, it's a complete MERN stack app that is an end to end Ticket Management tool for work flows in large organization.",
    tags: ["React", "JWT", "MongoDB", "Tailwind", "Express", "Node"],
    github: "https://github.com/arsh-meharwal/bug-tracker-app-backend",
    buttonLink: "https://bug-tracker-orange.vercel.app",
    imageUrl: wordanalyticsImg,
  }
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
