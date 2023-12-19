import {
  FlutterTech,
  JavaScriptTech,
  KotlinTech,
  ReactTech,
  SpringBootTech,
  type Technology,
} from "./technologies";

type Me = {
  name: string;
  aka: string;
  description: string;
  tags: string[];
  email: string;
};

export const me: Me = {
  name: "Elías Currihuil",
  aka: "c_quark",
  description:
    "Hi, I'm Elías from Temuco, Chile, an enthusiastic Computer Science student with a keen interest in learning and innovative tech solutions.",
  tags: ["Mobile Dev", "Web Dev", "Fullstack Dev"],
  email: "currihuile@gmail.com",
};
