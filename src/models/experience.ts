import {
  AstroTech,
  DartTech,
  ExpressTech,
  FlutterTech,
  MySQLTech,
  NodeJSTech,
  ReactTech,
  TailwindCSSTech,
  type Technology,
} from "./technologies";

interface Experience {
  employer: string;
  position: string;
  dateRange: string;
  description: string;
  technologies: Technology[];
}

export const experience: Experience[] = [
  {
    employer: "Universidad de la Frontera - Vinculación con el Medio",
    position: "Full-Stack Developer",
    dateRange: "January 2024 - March 2024",
    description:
      "I developed an architecture and implemented an RESTful API, as well as two web apps and two mobile apps, as a scalable and maintainable solution for managing events and initiatives at UFRO. I worked with tecnologies like Astro, Flutter and Node.js.",
    technologies: [
      AstroTech,
      ReactTech,
      TailwindCSSTech,
      FlutterTech,
      DartTech,
      NodeJSTech,
      ExpressTech,
      MySQLTech,
    ],
  },
];
