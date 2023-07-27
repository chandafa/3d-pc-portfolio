import {
  mobile,
  backend,
  creator,
  web,
  java,
  c,
  nasm,
  bash,
  python,
  csc,
  emc,
  MalwareHolmes,
  javaoop,
  redops,
  github,
  linkedin,
  gitbook,
  twitter,
  telegram,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socials = [
  {
    name: "github",
    url: "https://github.com/chandafa",
    icon: github,
  },
  {
    name: "gitbook",
    url: "https://chandafas-organization.gitbook.io/product-docs/",
    icon: gitbook,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/chandra-kirana-00b835244/",
    icon: linkedin,
  },
  {
    name: "telegram",
    url: "https://wa.me/62895404418536",
    icon: telegram,
  },
  {
    name: "twitter",
    url: "https://twitter.com/@chann",
    icon: twitter,
  },
];

const services = [
  {
    title: "Red Team Operations",
    icon: web,
  },
  {
    title: "Software Development",
    icon: mobile,
  },
  {
    title: "DevSecOps",
    icon: backend,
  },
  {
    title: "Research",
    icon: creator,
  },
];

const technologies = [
  {
    name: "c",
    icon: c,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "assembly",
    icon: nasm,
  },
  {
    name: "bash",
    icon: bash,
  },
];

const experiences = [
  {
    title: "Vice President & Head Of Offensive Operations",
    company_name: "Cyber Security Club - HTU · Membership",
    icon: csc,
    iconBg: "#000",
    date: "May 2023 - Present",
    points: [
      "Creating a comprehensive training pathway on GitHub.",
      "Creating a workspace for club members and giving ease of accessibility to them.",
      "Arranging meetings to strengthen communication among members.",
      "Connecting workspace, management & communication software's efficiently and effectively.",
      "Distributing tasks such as making KPIs on google sheets.",
      "Developing and implementing best practices",
      "Providing mentorship and guidance.",
      "Building the base of the cyber security club with a mind map.",
      "Arranging meetings to build communication and relationship between the club members.",
      "Choosing the right students to join our cyber security club and make a difference.",
      "Assisting club members by explaining and giving clear responsibilities.",
      "Establishing the club’s presence on GitHub and LinkedIn to engage the community.",
    ],
  },

  {
    title: "Technical Trainer",
    company_name: "Enlighten Me Club - HTU · Membership",
    icon: emc,
    iconBg: "#FFF",
    date: "Mar 2023 - Present",
    points: [
      "Communication with children and delivering information efficiently.",
      "Develop their creativity, problem solving and guide them to a bright future.",
      "Creating presentations that can help them better understand why learning is important in a entertaining way.",
      "Teach programming and increase their ability to learn, develop and improve their skills in programming.",
    ],
  },
];

const projects = [
  {
    name: "Offensive Operations Pathway",
    description:
      "As a head of offensive operations in my university's cyber security club, I developed this pathway to help new members learn the basics of offensive operations.",
    tags: [
      {
        name: "red team",
        color: "blue-text-gradient",
      },
      {
        name: "offensive operations",
        color: "green-text-gradient",
      },
      {
        name: "pathway",
        color: "pink-text-gradient",
      },
    ],
    image: redops,
    source_code_link: "https://github.com/smadi0x86/CSC-RedOps",
  },
  {
    name: "Java Teach2Learn",
    description:
      "This is a study technique that I developed to help me learn Java for my university, It tricks your brain into thinking you already know these concepts and that you are teaching it to someone else.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Teach2Learn",
        color: "green-text-gradient",
      },
      {
        name: "University",
        color: "pink-text-gradient",
      },
    ],
    image: javaoop,
    source_code_link: "https://github.com/smadi0x86/java0x01",
  },
  {
    name: "MalwareHolmes",
    description:
      "This is a malware Identifier for my university's programming final project written in java!",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Maven",
        color: "green-text-gradient",
      },
      {
        name: "Malware-detection",
        color: "pink-text-gradient",
      },
    ],
    image: MalwareHolmes,
    source_code_link: "https://github.com/smadi0x86/MalwareHolmes",
  },
];

export { services, technologies, experiences, projects, socials };
