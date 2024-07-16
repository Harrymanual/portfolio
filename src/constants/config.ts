type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Harrison Glenn — Portfolio",
    fullName: "Harrison Glenn",
    email: "harrisonabglenn@gmail.com",
  },
  hero: {
    name: "Harrison Glenn",
    p: ["I solve Leetcode problems and love software. You can catch me at the climbing gym or watching F1."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "",
      h2: "Overview",
      content: `I'm a highly motivated software developer with a passion for 
      tackling problems using Python and Java. My academic foundation fuels my 
      desire to build intelligent and efficient solutions. I thrive on the challenge 
      of crafting elegant and efficient code and enjoy the collaborative nature of software development. 
      My eagerness to learn and dedication to continuous improvement drive me to excel in every project.`,
    },
    experience: {
      p: "",
      h2: "Work Experience",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials",
    },
    works: {
      p: "My work",
      h2: "Projects",
      content: `The following projects showcase my skills and experience with 
      examples of my work. Each project is briefly described with
    links to code repositories and websites where relevant. It reflects my
    ability to solve problems and learn different technologies.`,
    },
  },
};
