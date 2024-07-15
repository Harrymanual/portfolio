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
  tube
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
    title: "Python Enjoyer",
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
    iconBg: "#383E56",
    date: "Jul 2017 - Oct 2021",
    points: [
      "Training and onboarding new crew members on McDonald's procedures, food safety protocols, and customer service standards.",
      "Providing ongoing coaching and guidance to existing crew members, ensuring they meet performance expectations.",
      "Communicating effectively with managers and crew members, relaying important information and contributing to a seamless flow of operations.",
    ],
  },
  {
    title: "Front of House Leader",
    companyName: "Feros Group",
    icon: feros,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Present",
    points: [
      "Leading and mentoring junior front of house staff, providing guidance and support.",
      "Collaborating closely with back of house teams to ensure smooth service and timely order delivery.",
      "Addressing and resolving customer concerns, demonstrating strong conflict resolution skills and maintaining a positive atmosphere.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Customers appreciate Harry's patient and helpful attitude. He's always willing to go the extra mile to ensure their needs are met and they have a positive experience.",
    name: "Karyna Deushian",
    designation: "Former Licensee",
    company: "Ugly Pizza",
    image: "https://media.licdn.com/dms/image/D4E03AQGB2-CUSNxg5A/profile-displayphoto-shrink_800_800/0/1715688276652?e=1726704000&v=beta&t=U5oeHrcrSfEu3q-o9sZUJp7objBq6x1wpSrMulg4xBo",
  },
  {
    testimonial:
      "Harry's dedication is truly commendable. He's a hard worker who consistently goes above and beyond, tackling challenges with enthusiasm and a strong drive to succeed.",
    name: "Louise Hannah-Cullen",
    designation: "Licensee",
    company: "Highfields",
    image: "https://scontent.fsyd11-2.fna.fbcdn.net/v/t1.6435-9/181819382_1900624926756874_4840969318101900456_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=5-nptOQ6PcoQ7kNvgHumIqc&_nc_ht=scontent.fsyd11-2.fna&cb_e2o_trans=t&oh=00_AYBc3uDQgDHBjXzuUsLizL50ZO53ZS6lkSjEPFH1PO4EWg&oe=66BADFCB",
  },
  {
    testimonial:
      "Harry's communication skills extend seamlessly to his mentorship of junior team members. He explains concepts clearly, provides constructive feedback, and fosters a supportive learning environment.",
    name: "Brock Nelson",
    designation: "Licensee",
    company: "Ugly Pizza",
    image: "https://scontent.fsyd11-1.fna.fbcdn.net/v/t39.30808-6/273975127_10226391841212150_6722240789011228886_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_mQ1dCEysTwQ7kNvgGhEH2g&_nc_ht=scontent.fsyd11-1.fna&cb_e2o_trans=t&oh=00_AYDC5rRefaa26q5WTQpbQ5IYiMilRpSUsH8ZEwCSLcxSrQ&oe=6699228E",
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
    link: "https://harry-formula-1.onrender.com",
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
      "A weight tracking app built with react native. This app was created only using Chat GPT as my learning resource to see how effective it is at providing quality information. Spoiler alert not very.",
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
