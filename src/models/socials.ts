export type SocialLink = {
  name: string;
  icon: string;
  url: string;
  color: string;
};

export const LinkedIn: SocialLink = {
  name: "LinkedIn",
  icon: "simple-icons:linkedin",
  url: "https://www.linkedin.com/in/your-profile",
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

export const Instagram: SocialLink = {
  name: "Instagram",
  icon: "simple-icons:instagram",
  url: "https://www.instagram.com/c_quarkfpv",
  color: "#E4405F",
};

export const socials = [GitHub, Twitter, Instagram];
