import {
  AstroTech,
  DartTech,
  FirebaseTech,
  FlutterTech,
  JavaScriptTech,
  JetpackComposeTech,
  KotlinTech,
  MySQLTech,
  ReactTech,
  SpringBootTech,
  TypeScriptTech,
  type Technology,
} from "./technologies";

export type Project = {
  name: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
  link: string;
};

export const projects: Project[] = [
  {
    name: "LeafWaves",
    description:
      "LeafWaves is an Android note-taking app with a text editor, created using Flutter. You can download it from the Play Store!",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/praisethesale-c921f.appspot.com/o/leafwaves.webp?alt=media&token=e701f199-8c0e-4757-8f14-9239b9ca5ca9",
    technologies: [DartTech, FlutterTech, FirebaseTech],
    link: "https://play.google.com/store/apps/details?id=com.leafwaves.dev",
  },
  {
    name: "SpaceXplorer",
    description:
      "An app leveraging the SpaceX API to provide launch, rocket, and launchpad details. Built from scratch with Astro and TypeScript, it features hydrated React components and is styled with Tailwind CSS.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/praisethesale-c921f.appspot.com/o/spacexplorer.png?alt=media&token=dd1686f1-ed57-4ded-8cf1-a203190537ce",
    technologies: [AstroTech, ReactTech, TypeScriptTech, JavaScriptTech],
    link: "https://spacexplorer-cyan.vercel.app/",
  },
  {
    name: "PraiseTheSale",
    description:
      "An E-commerce platform developed with React and SpringBoot. It's a kind of free market, where anyone can post their products for sale.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/praisethesale-c921f.appspot.com/o/praise-the-sale-pic.png?alt=media&token=2f993792-36ad-4f52-a2c0-1202189a93ca",
    technologies: [ReactTech, SpringBootTech, JavaScriptTech, MySQLTech],
    link: "https://github.com/CQuarkH/PraiseTheSale",
  },
  {
    name: "MediOrganizer",
    description:
      "MediOrganizer is a desktop app that serves as a medical organizer, allowing you to register patients, consultation hours, and more.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/praisethesale-c921f.appspot.com/o/mediorganizer.png?alt=media&token=0c0eda92-ac8f-49ce-9f0d-788ca78a127b",
    technologies: [KotlinTech, JetpackComposeTech],
    link: "https://github.com/CQuarkH/MediOrganizer",
  },
];
