import {
  AstroTech,
  DartTech,
  FirebaseTech,
  FlutterTech,
  JavaScriptTech,
  ReactTech,
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
  }
];
