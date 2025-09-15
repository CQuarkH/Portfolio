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
  SpringBootTech,
  NestJSTech,
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
    position: "Full-Stack Developer",
    url: "https://etransparencia.cl/",
    dateRange: "April 2024 - November 2024",
    description: "I developed an end-to-end platform to evaluate the transparency of Chilean public institutions, building both the complete frontend with Vue.js and backend integrations with SpringBoot and NestJS. I implemented differentiated functionalities for multiple roles (evaluated institutions, auditors, and administrators) with access to specialized dashboards. I designed and optimized the full-stack architecture, refactoring existing code to achieve a more scalable, maintainable, and efficient solution for processing large volumes of institutional transparency data.",
    technologies: [
      VueJSTech,
      TailwindCSSTech,
      ViteTech,
      SpringBootTech,
      NestJSTech,
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
