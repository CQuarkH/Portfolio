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
      "https://private-user-images.githubusercontent.com/109247730/294303211-b3b2adc2-f7e8-4347-8074-d097e52d13ae.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ0MjcwMTIsIm5iZiI6MTcwNDQyNjcxMiwicGF0aCI6Ii8xMDkyNDc3MzAvMjk0MzAzMjExLWIzYjJhZGMyLWY3ZTgtNDM0Ny04MDc0LWQwOTdlNTJkMTNhZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwNVQwMzUxNTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNzc2ZTZjOTk5NDM0YzFlNjJlMmU5MGI5YWNhMjRmYzMzZTA1NmNlOThlNzhmY2ZhMjMwZDQxYzZmMDdlZjAzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.WlQQKdt1BbEJ8WH_SeFg3Zw6Qoo0EzqZOXYD6NObG4I",
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
