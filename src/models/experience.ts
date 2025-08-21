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
  PythonTech,
  TensorFlowTech,
  PyTorchTech,
  UNetTech,
  YOLOv5Tech,
  SiameseNetworkTech,
} from "./technologies";

interface Experience {
  employer: string;
  position: string;
  url?: string;
  dateRange: string;
  description: string;
  technologies: Technology[];
}

export const experience: Experience[] = [
  {
    employer: "Sociedad de Ortodoncia de Chile",
    url: "https://diagnosmart.espaciodentario.cl/",
    position: "Full-Stack & AI Developer",
    dateRange: "March 2025 - September 2025",
    description:
      "Developed and deployed a dental analysis system based on Artificial Intelligence to automatically detect clinical risks from panoramic radiographs. The system identifies orthodontic treatment needs or urgent interventions, helping to prevent invasive procedures such as surgeries. Achieved 80% accuracy using Deep Learning models (U-Net, YOLOv5, Siamese networks) for segmentation, detection, and comparison of dental structures.",
    technologies: [
      PythonTech,
      TensorFlowTech,
      PyTorchTech,
      UNetTech,
      YOLOv5Tech,
      SiameseNetworkTech,
      DockerTech
    ]
  },
  {
    employer: "FONDECYT - eTransparencia",
    position: "Frontend Developer",
    url: "https://etransparencia.cl/",
    dateRange: "May 2024 - October 2024",
    description: "Responsible for front-end development of eTransparencia, a platform built under FONDECYT research to audit the transparency of Chilean public institutions. The development utilized technologies such as Vue.js, Tailwind CSS, Vitest, among others.",
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
