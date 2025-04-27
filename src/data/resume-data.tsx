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
  location: "Berlin, Deutschland",
  locationLink: "https://www.google.com/maps/place/Berlin,+Germany",
  about: "Frontend-Entwickler",
  summary: (
    <>
      <p>
        Erfahrener Frontend-Entwickler mit über fünf Jahren praktischer
        Erfahrung in React, Next.js, React Native, GraphQL und TypeScript.
        Nachweisliche Erfolge in der ganzheitlichen Umsetzung von Produkten bei
        Code-B, dabei komplexe Anforderungen in skalierbare Web- und
        Mobile-Applikationen übersetzt.
      </p>
      <p>
        Leidenschaft für konsistente visuelle Identitäten und ansprechende
        Nutzererlebnisse. In meiner Freizeit erkunde ich neue Technologien und
        realisiere kreative, technisch herausfordernde Projekte.
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
      degree: "BSc in Systemanalyse und -entwicklung",
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
      title: "Frontend-Entwickler",
      logo: null,
      start: "06.2022",
      end: null,
      description: (
        <ul className="list-inside list-disc space-y-1">
          <li>
            Entwicklung responsiver, hochperformanter Web- und
            Mobile-Anwendungen mit React, Next.js, React Native und TypeScript;
            steigerte Nutzerengagement und Effizienz (u. a.{" "}
            <a
              className="underline hover:text-foreground/70"
              href="https://thepioneer.de"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Pioneer"
            >
              thepioneer.de
            </a>
            ,{" "}
            <a
              className="underline hover:text-foreground/70"
              href="https://tabletop-herald.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tabletop Herald"
            >
              tabletop-herald.com
            </a>
            ).
          </li>
          <li>
            Optimierung von CI/CD-Pipelines durch automatisierte Tests, was zu
            schnelleren Deployments und höherer Stabilität führte.
          </li>
          <li>
            Mentoring von Junior-Entwicklern und Durchführung gründlicher
            Code-Reviews zur Verbesserung von Best Practices und Code-Qualität.
          </li>
          <li>
            Projektleitung von der Anforderungserfassung über Architekturdesign
            bis hin zu Deployment und kontinuierlicher Weiterentwicklung in
            Abstimmung mit Geschäfts- und Nutzerzielen.
          </li>
        </ul>
      ),
    },
    {
      company: "Selbstständig",
      link: "https://ptrcklehmann.com",
      badges: ["TypeScript", "React", "React Native", "GraphQL"],
      title: "Freiberuflicher Full-Stack-Entwickler",
      logo: null,
      start: "05.2016",
      end: "05.2022",
      description: (
        <ul className="list-inside list-disc space-y-1">
          <li>
            Konzeption, Implementierung, Test und Rollout robuster, skalierbarer
            Softwarelösungen mit hoher Verfügbarkeit unter Nutzung moderner
            Development-Practices.
          </li>
          <li>
            Kontinuierliche Modernisierung von Altsystemen, Integration neuer
            Features und Entwicklung nutzerzentrierter Anwendungen im Einklang
            mit strategischen Unternehmenszielen.
          </li>
          <li>
            Eigenständiges Management von Kundenbeziehungen und
            Projektzeitplänen.
          </li>
        </ul>
      ),
    },
    {
      company: "International Labour Organization",
      link: "https://www.ilo.org",
      badges: ["Remote", "Graphic Design", "UI/UX", "Frontend"],
      title: "Grafikdesigner & Frontend-Entwickler",
      logo: null,
      start: "10.2019",
      end: "05.2022",
      description: (
        <ul className="list-inside list-disc space-y-1">
          <li>
            Gestaltung konsistenter visueller Identitäten und UI-Designs für
            globale Reports und Events (z. B. Global Social Protection Week,
            Global Flagship Programme), steigerte Markenwiedererkennung und
            Nutzerengagement.
          </li>
          <li>
            Verbesserung der Barrierefreiheit und Modernisierung der
            Nutzererfahrung bei Online-Reports nach zeitgemäßen Web-Standards.
          </li>
          <li>
            Zusammenarbeit mit Stakeholdern in verschiedenen Ländern und
            Zeitzonen.
          </li>
        </ul>
      ),
    },
    {
      company: "Efficient Signer and Print Ltd",
      link: "https://efficientsigns.com/",
      badges: ["Graphic Design", "Print", "Digital"],
      title: "Grafikdesigner",
      logo: null,
      start: "01.2015",
      end: "12.2015",
      description: (
        <ul className="list-inside list-disc space-y-1">
          <li>
            Entwicklung wirkungsvoller Marketing-Packages (Printmaterialien,
            Broschüren, Banner, Beschilderungen) zur Steigerung der
            Markensichtbarkeit.
          </li>
          <li>
            Erstellung von Trend-Boards und Marktanalysen zur Identifikation
            neuer Chancen und zur Unterstützung strategischer Entscheidungen.
          </li>
          <li>
            Gleichzeitige Betreuung mehrerer Design-Projekte unter engen
            Deadlines.
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
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Agile / Scrum",
  ],
  projects: [],
} as const;
