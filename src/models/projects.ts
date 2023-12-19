import {
  DartTech,
  FirebaseTech,
  FlutterTech,
  JavaScriptTech,
  JetpackComposeTech,
  KotlinTech,
  MySQLTech,
  ReactTech,
  SpringBootTech,
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
    name: "MediOrganizer",
    description:
      "MediOrganizer is a desktop app that serves as a medical organizer, allowing you to register patients, consultation hours, and more.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/praisethesale-c921f.appspot.com/o/mediorganizer.png?alt=media&token=0c0eda92-ac8f-49ce-9f0d-788ca78a127b",
    technologies: [KotlinTech, JetpackComposeTech],
    link: "https://github.com/CQuarkH/MediOrganizer",
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
    name: "Steam Store Clone",
    description:
      "A very basic clone of the Steam game store, developed with React and SpringBoot.",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/praisethesale-c921f.appspot.com/o/steam-clone.png?alt=media&token=e443e139-ff57-4b84-8392-4b10ef67fa4f",
    technologies: [ReactTech, SpringBootTech, JavaScriptTech, MySQLTech],
    link: "https://github.com/CQuarkH/Steam-Clone",
  },
];
