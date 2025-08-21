import { projects, type Project } from "./projects";
import { socials, type SocialLink } from "./socials";
import { technologies, type Technology } from "./technologies";

type Me = {
  name: string;
  aka: string;
  description: string;
  experience: string;
  tags: string[];
  email: string;
  socials: SocialLink[];
  projects: Project[];
  technologies: Technology[];
};

export const me: Me = {
  name: "Hi, I'm Elías Currihuil",
  aka: "C_Quark",
  experience: "",
  description:
    "Web and Fullstack Developer as well as a Mobile Developer. From Temuco, Chile. Currently in the last semester of Computer Engineering at Universidad de la Frontera.",
  tags: ["Web Dev", "Mobile Dev", "Fullstack Dev"],
  email: "currihuile@gmail.com",
  socials: socials,
  projects: projects,
  technologies: technologies,
};
