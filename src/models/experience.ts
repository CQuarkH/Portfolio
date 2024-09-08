import {
  ArduinoTech,
  AstroTech,
  DartTech,
  ExpressTech,
  FlutterTech,
  MySQLTech,
  NextJSTech,
  NodeJSTech,
  ReactTech,
  TailwindCSSTech,
  VueJSTech,
  ViteTech,
  type Technology,
  DockerTech,
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
    employer: "FONDECYT - TuTransparencia",
    position: "Frontend Developer",
    dateRange: "May 2024 - October 2024",
    description: "Responsible for front-end development of TuTransparencia, a platform built under FONDECYT research to audit the transparency of Chilean public institutions. The development utilized technologies such as Vue.js, Tailwind CSS, Vitest, among others.",
    technologies: [
      VueJSTech,
      TailwindCSSTech,
      ViteTech,
      DockerTech
    ]
  },
  {
    employer: "IDEAUFRO - Instituto del Medio Ambiente UFRO",
    position: "Full-Stack Developer",
    dateRange: "March 2024 - July 2024",
    description: "Development of a real-time energy monitoring system based on the monitoring of environmental variables such as temperature, relative humidity, light intensity, and the presence of people. Technologies used include Next.js, Express.js, Arduino, and bidirectional communication protocols like WebSockets.",
    technologies: [
      NextJSTech,
      ReactTech,
      TailwindCSSTech,
      NodeJSTech,
      ExpressTech,
      MySQLTech,
      ArduinoTech,
      DockerTech
    ]

  },
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
  }
];
