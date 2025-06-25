import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  sql,
  maccas,
  feros,
  python,
  r,
  java,
  git,
  f1,
  site,
  weight,
  tube,
  rwd,
  fuji
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
];

const services: TService[] = [
  {
    title: "Leetcode Enthusiast",
    icon: web,
  },
  {
    title: "Python Aficionado",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "R",
    icon: r,
  }, 
];

const experiences: TExperience[] = [
  {
    title: "Crew Trainer",
    companyName: "McDonald's",
    icon: maccas,
    iconBg: "#dc0001",
    date: "Jul 2017 - Oct 2021",
    points: [
      "Training and onboarding new crew members on McDonald's procedures, food safety protocols and customer service standards.",
      "Providing ongoing coaching and guidance to existing crew members, ensuring they meet performance expectations.",
      "Communicating effectively with managers and crew members, relaying important information and contributing to a seamless flow of operations.",
    ],
  },
  {
    title: "Data Science Internship",
    companyName: "Ruby Wednesday Distillery",
    icon: rwd,
    iconBg: "#171717",
    date: "Feb 2023 - Nov 2023",
    points: [
      "Analyse data from Squarespace to optimise the targeting and effectiveness of online marketing campaigns.",
      "Implemented minor front end design changes using primarily css.",
    ],
  },
  {
    title: "Front of House Leader",
    companyName: "Feros Group",
    icon: feros,
    iconBg: "#004135",
    date: "Oct 2021 - Feb 2025",
    points: [
      "Leading and mentoring junior front of house staff, providing guidance and support.",
      "Collaborating closely with back of house teams to ensure smooth service and on time deliveries.",
      "Addressing and resolving customer concerns, demonstrating strong conflict resolution skills and maintaining a positive atmosphere.",
    ],
  },
  {
    title: "Associate Test Analyst",
    companyName: "Fujifilm Data Management Solutions",
    icon: fuji,
    iconBg: "#004135",
    date: "Jan 2025 - Present",
    points: [
      "Automate end-to-end smoke and regression tests, and maintain robust CI/CD pipelines to ensure rapid and reliable software delivery.",
      "Develop in-house tools and dashboards, leveraging machine learning algorithms for workload forecasting and process optimisation.",
      "Perform thorough manual testing to validate edge cases and ensure high-quality releases."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Customers appreciate Harry's patient and helpful attitude. He's always willing to go the extra mile to ensure their needs are met and they have a positive experience.",
    name: "Karyna Deushian",
    designation: "Former Licensee",
    company: "Ugly Pizza, Feros Group",
  },
  {
    testimonial:
      "Harry's dedication is truly commendable. He's a hard worker who consistently goes above and beyond, tackling challenges with enthusiasm and a strong drive to succeed.",
    name: "Louise Hannan-Cullen",
    designation: "Licensee",
    company: "Highfields, Feros Group",
  },
  {
    testimonial:
      "Harry's communication skills extend seamlessly to his mentorship of junior team members. He explains concepts clearly, provides constructive feedback, and fosters a supportive learning environment.",
    name: "Brock Nelson",
    designation: "Licensee",
    company: "Ugly Pizza, Feros Group",
  },
  {
    testimonial:
      "Working with Harry is truly a pleasure. He brings a positive energy and collaborative spirit to work every day, making him a joy to be around. His enthusiasm is infectious!",
    name: "Lachlan Feros",
    designation: "Senior Manager",
    company: "Highfields, Feros Group",
  },
];

const projects: TProject[] = [
  {
    name: "YouTube Channel",
    description:
      "My YouTube channel where I solve leetcode problems and typically upload my entire thought process and redo problems until I fully understand them.",
    tags: [
      {
        name: "algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "communication",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: tube,
    youtubeLink: "https://www.youtube.com/@harrycodesproblems",
  },
  {
    name: "Formula 1 Website",
    description:
      `A Formula 1 passion project where I learned how to create and deploy a website from scratch.`,
    link: "https://formula-1-website-react.vercel.app/",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "jsx",
        color: "green-text-gradient",
      },
      {
        name: "server deployment",
        color: "pink-text-gradient",
      },
    ],
    image: f1,
    sourceCodeLink: "https://github.com/Harrymanual/Formula_1_Website_React",
  },
  {
    name: "Weight Tracking App",
    description:
      "Weight tracking app built with react native. This app was created only using Chat GPT as my learning resource to see how effective it is at providing quality information. Spoiler alert not very.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weight,
    sourceCodeLink: "https://github.com/Harrymanual/Weight-Tracker",
  },
  {
    name: "Former Personal Website",
    description:
      "My first attempt using Github Pages to try and create a portfolio, including a blog and an about me section.",
    link: "https://harrymanual.github.io/",
    tags: [
      {
        name: "github",
        color: "blue-text-gradient",
      },
      {
        name: "jekyll",
        color: "green-text-gradient",
      },
      {
        name: "pages",
        color: "pink-text-gradient",
      },
    ],
    image: site,
    sourceCodeLink: "https://github.com/Harrymanual/Harrymanual.github.io",
  },
];

export { services, technologies, experiences, testimonials, projects };
