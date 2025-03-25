import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ReactNode } from "react";

type Social = {
  name: string;
  url: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

type Education = {
  school: string;
  degree: string;
  start: string;
  end: string | null;
};

type WorkExperience = {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: string | null;
  start: string;
  end: string | null;
  description: ReactNode;
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: {
    label: string;
    href: string;
  };
  techStack: string[];
};

type ResumeData = {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: ReactNode;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    tel: string;
    social: Social[];
  };
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: Project[];
};

export const RESUME_DATA: ResumeData = {
  name: "Patrick Lehmann",
  initials: "PL",
  location: "Berlin, Germany CET",
  locationLink: "https://www.google.com/maps/place/Berlin,+Germany",
  about:
    "Senior Full-Stack Developer with 7+ years of experience delivering scalable web and mobile applications.",
  summary: (
    <>
      Currently driving end-to-end product delivery at code-b, translating
      complex requirements into robust solutions using React, Next.js, React
      Native, and TypeScript.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/32590221?v=4",
  personalWebsiteUrl: "https://ptrcklehmann.com",
  contact: {
    email: "connect@ptrcklehmann.com",
    tel: "+4915901345063",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ptrcklehmann",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ptrcklehmann",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "President Antônio Carlos University",
      degree: "BSc in Systems Analysis and Development",
      start: "01.2006",
      end: "07.2011",
    },
    {
      school: "Ironhack Berlin",
      degree: "Full-Stack Web Development Bootcamp",
      start: "01.2021",
      end: "05.2021",
    },
  ],
  work: [
    {
      company: "code-b",
      link: "https://code-b.com",
      badges: ["On Site", "TypeScript", "React", "Next.js", "React Native"],
      title: "Full-Stack Developer",
      logo: null,
      start: "06.2022",
      end: null,
      description: (
        <ul className="list-inside list-disc">
          <li>
            Developed responsive and high-performing web and mobile
            applications, improving user engagement and reducing load times by
            up to 30% using React, Next.js, React Native, and TypeScript.
            Notable projects include thepioneer.de and tabletop-herald.com.
          </li>
          <li>
            Streamlined CI/CD pipelines, reducing deployment times by 25% and
            enhancing application stability through automated testing.
          </li>
          <li>
            Supported junior developers through mentorship and thorough code
            reviews, fostering better practices and improving overall code
            quality.
          </li>
          <li>
            Managed projects from requirements gathering and architecture design
            to deployment and ongoing improvements, ensuring alignment with
            business goals and user needs.
          </li>
        </ul>
      ),
    },
    {
      company: "Freelance",
      link: "https://ptrcklehmann.com",
      badges: ["TypeScript", "React", "React Native", "GraphQL"],
      title: "Full-Stack Developer",
      logo: null,
      start: "05.2016",
      end: "05.2022",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Built, tested, and launched robust, scalable software solutions with
            high availability, prioritizing reliability and peak performance
            through modern development practices.
          </li>
          <li>
            Consistently enhanced legacy systems, integrating new
            functionalities and delivering innovative, user-centric applications
            aligned closely with strategic business objectives.
          </li>
          <li>
            Managed client relationships and project timelines independently
          </li>
        </ul>
      ),
    },
    {
      company: "International Labour Organization",
      link: "https://www.ilo.org",
      badges: ["Remote", "Graphic Design", "UI/UX", "Frontend"],
      title: "Graphic Designer & Frontend Developer",
      logo: null,
      start: "10.2019",
      end: "05.2022",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Created cohesive visual identities and UI designs for global reports
            and events, significantly enhancing brand consistency and user
            engagement for initiatives like Global Social Protection Week and
            the Global Flagship Programme.
          </li>
          <li>
            Improved accessibility and modernized user experience for online
            reports, meeting contemporary web standards and boosting user
            interaction.
          </li>
          <li>
            Collaborated with stakeholders across multiple countries and time
            zones
          </li>
        </ul>
      ),
    },
    {
      company: "Efficient Signer and Print Ltd",
      link: "https://efficientsigns.com/",
      badges: ["Graphic Design", "Print", "Digital"],
      title: "Graphic Designer",
      logo: null,
      start: "01.2015",
      end: "12.2015",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Designed impactful marketing packages, including compelling print
            materials, brochures, banners, and signage, significantly improving
            brand visibility and market presence.
          </li>
          <li>
            Produced insightful trend boards and conducted market analysis to
            identify emerging opportunities, enabling strategic business
            decisions and capitalizing on industry shifts.
          </li>
          <li>
            Managed multiple design projects simultaneously with tight deadlines
          </li>
        </ul>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Contentful",
    "Headless CMS",
    "REST API",
    "SQL/MySQL",
    "MongoDB",
    "Jest",
    "Vitest",
    "CI/CD",
    "HTML5",
    "CSS3",
  ],
  projects: [],
} as const;
