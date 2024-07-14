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
  carrent,
  jobit,
  tripguide,
  python,
  r,
  java,
  git
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
    id: "contact",
    title: "Contact",
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
      "I didn't realise such passionate workers existed before meeting Harry. Plus his muscles are huge.",
    name: "Karyna Deushian",
    designation: "Licensee",
    company: "Ugly Pizza",
    image: "https://media.licdn.com/dms/image/D4E03AQGB2-CUSNxg5A/profile-displayphoto-shrink_800_800/0/1715688276652?e=1726704000&v=beta&t=U5oeHrcrSfEu3q-o9sZUJp7objBq6x1wpSrMulg4xBo",
  },
  {
    testimonial:
      "He's so good with the customers, it's like he's magic!",
    name: "Louise Hannah-Cullen",
    designation: "Licensee",
    company: "Highfields",
    image: "https://scontent.fsyd11-2.fna.fbcdn.net/v/t1.6435-9/181819382_1900624926756874_4840969318101900456_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=5-nptOQ6PcoQ7kNvgHumIqc&_nc_ht=scontent.fsyd11-2.fna&cb_e2o_trans=t&oh=00_AYBc3uDQgDHBjXzuUsLizL50ZO53ZS6lkSjEPFH1PO4EWg&oe=66BADFCB",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Brock Nelson",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://scontent.fsyd11-1.fna.fbcdn.net/v/t39.30808-6/273975127_10226391841212150_6722240789011228886_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_mQ1dCEysTwQ7kNvgGhEH2g&_nc_ht=scontent.fsyd11-1.fna&cb_e2o_trans=t&oh=00_AYDC5rRefaa26q5WTQpbQ5IYiMilRpSUsH8ZEwCSLcxSrQ&oe=6699228E",
  },
];

const projects: TProject[] = [
  {
    name: "YouTube Channel",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    youtubeLink: "https://github.com/",
  },
  {
    name: "Formula 1 Website",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Weight Tracking App",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
