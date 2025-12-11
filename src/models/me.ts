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
  experience: "+3 Years",
  description:
    "Software Engineer with +3 years of experience specialized in the convergence of Full Stack Development and Applied Artificial Intelligence. I focus on building scalable systems that integrate Deep Learning models and LLMs into robust production architectures. ",
  tags: ["AI Engineer", "Fullstack Dev", "Data & Research"],
  email: "currihuile@gmail.com",
  socials: socials,
  projects: projects,
  technologies: technologies,
};
