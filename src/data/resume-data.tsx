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
  about: "Full-Stack Developer",
  summary: (
    <>
      <p className="print:leading-snug">
        Experienced Full-Stack Developer with over 5 years of hands-on
        experience in React, Next.js, React Native, GraphQL, and TypeScript.
        Proven track record of driving end-to-end product delivery at code-b,
        translating complex requirements into scalable web and mobile
        applications.
      </p>
      <p className="print:leading-snug">
        Passionate about creating cohesive visual identities and engaging user
        experiences. In my free time, I enjoy exploring new technologies and
        building creative, technically challenging projects.
      </p>
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
      badges: ["React Native", "TypeScript", "React", "Next.js", "GraphQL"],
      title: "Frontend Developer",
      logo: null,
      start: "06.2022",
      end: "04.2025",
      description: (
        <ul className="list-inside list-disc space-y-0.5 ">
          <li className="print:leading-relaxed">
            Developed responsive and high-performing web and mobile
            applications, significantly improving user engagement and
            application efficiency using React, Next.js, React Native, and
            TypeScript. Notable projects include{" "}
            <a
              className="underline hover:text-foreground"
              href="https://thepioneer.de"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ThePioneer"
            >
              ThePioneer.de
            </a>{" "}
            and{" "}
            <a
              className="underline hover:text-foreground"
              href="https://tabletop-herald.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tabletop Herald"
            >
              tabletop-herald.com
            </a>
            .
          </li>
          <li className="print:leading-relaxed">
            Streamlined CI/CD pipelines, notably improving deployment efficiency
            and enhancing application stability through automated testing.
          </li>
          <li className="print:leading-relaxed">
            Supported junior developers through mentorship and thorough code
            reviews, fostering better practices and improving overall code
            quality.
          </li>
          <li className="print:leading-relaxed">
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
        <ul className="list-inside list-disc space-y-0.5">
          <li className="print:leading-relaxed">
            Built, tested, and launched robust, scalable software solutions with
            high availability, prioritizing reliability and peak performance
            through modern development practices.
          </li>
          <li className="print:leading-relaxed">
            Consistently enhanced legacy systems, integrating new
            functionalities and delivering innovative, user-centric applications
            aligned closely with strategic business objectives.
          </li>
          <li className="print:leading-relaxed">
            Managed client relationships and project timelines independently.
          </li>
        </ul>
      ),
    },
    {
      company: "International Labour Organization",
      link: "https://www.ilo.org",
      badges: ["Remote", "Graphic Design", "UI/UX", "Frontend"],
      title: "Graphic/UI Designer & Frontend Developer",
      logo: null,
      start: "10.2019",
      end: "05.2022",
      description: (
        <ul className="list-inside list-disc space-y-0.5">
          <li className="print:leading-relaxed">
            Designed consistent UI systems and developed accessible interfaces
            for global web-based reports.
          </li>
          <li className="print:leading-relaxed">
            Collaborated remotely with international teams, ensuring reliable
            rollout across multiple platforms.
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
        <ul className="list-inside list-disc space-y-0.5">
          <li className="print:leading-relaxed">
            Designed impactful marketing packages, including compelling print
            materials, brochures, banners, and signage, significantly improving
            brand visibility and market presence.
          </li>
          <li className="print:leading-relaxed">
            Produced insightful trend boards and conducted market analysis to
            identify emerging opportunities, enabling strategic business
            decisions and capitalizing on industry shifts.
          </li>
          <li className="print:leading-relaxed">
            Managed multiple design projects simultaneously with tight
            deadlines.
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
    "Headless CMS",
    "REST API",
    "SQL/MySQL",
    "MongoDB",
    "Express",
    "Git",
    "CI/CD",
    "Jest",
    "Vitest",
    "Docker",
    "Xcode",
    "Android Studio",
    "Kotlin",
    "Figma",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Agile/Scrum",
  ],
  projects: [],
} as const;
