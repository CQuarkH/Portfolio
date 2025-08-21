export type SocialLink = {
  name: string;
  icon: string;
  url: string;
  color: string;
};

export const LinkedIn: SocialLink = {
  name: "LinkedIn",
  icon: "simple-icons:linkedin",
  url: "https://linkedin.com/in/elías-currihuil-3573552a6",
  color: "#0A66C2",
};

export const GitHub: SocialLink = {
  name: "GitHub",
  icon: "simple-icons:github",
  url: "https://github.com/CQuarkH",
  color: "#a1a1aa",
};

export const Twitter: SocialLink = {
  name: "Twitter",
  icon: "simple-icons:twitter",
  url: "https://twitter.com/currihuil_elias",
  color: "#1DA1F2",
};

export const socials = [GitHub, LinkedIn];
