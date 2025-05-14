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
  about: "Senior Frontend-Entwickler | React / Next.js",
  summary: (
    <>
      <p>
        Erfahrener Frontend-Entwickler mit über fünf Jahren Expertise in der
        Umsetzung hochperformanter, headless E-Commerce- und
        Digital-Plattformen. Tiefgehende Kenntnisse in React, Next.js und
        TypeScript sowie im Aufbau skalierbarer Architekturen. Bewährt in
        technischer Führung, Code-Qualitätssicherung und agiler
        Prozessgestaltung. Starke Mentoring-Erfahrung und proaktive Einbindung
        von KI-Tools zur Effizienzsteigerung.
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
      end: "04.2025",
      description: (
        <ul className="list-inside list-disc space-y-0.5">
          <li>
            Treffen fundierter Entscheidungen für Headless-Webanwendungen im
            E-Commerce-Umfeld und Weiterentwicklung der Gesamtarchitektur.
          </li>
          <li>
            Entwicklung skalierbarer Frontend-Konzepte, enge Abstimmung mit
            Backend-Architektur und Solution Architecture.
          </li>
          <li>
            {" "}
            Aufbau und Optimierung von GitLab-CI/CD-Pipelines mit
            Docker-Containern; Automatisierung von Deployments und
            Testing-Workflows.
          </li>
          <li>
            Etablierung von Code-Standards, Durchführung regelmäßiger
            Code-Reviews; Einführung von Jest- und Vitest-Tests zur nachhaltigen
            Reduktion technischer Schulden.
          </li>
          <li>
            Coaching von Junior-Entwickler:innen, Organisation von
            Wissensaustausch-Sessions und Pair-Programming.
          </li>
          <li>
            Pilotierung von AI-gestützten Tools (z. B. Copilot, ChatGPT) zur
            Steigerung der Entwickler-Produktivität.
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
        <ul className="list-inside list-disc space-y-0.5">
          <li>
            Planung, Implementierung und Rollout von skalierbaren Web- und
            Mobile-Lösungen mit React, React Native und GraphQL.
          </li>
          <li>
            Kontinuierliche Modernisierung von Legacy-Systemen; Fokus auf
            Nutzerzentrierung und Performancesteigerung.
          </li>
          <li>
            Selbstständiges Projekt- und Kundenmanagement inkl.
            Anforderungs­analyse und Architekturdesign.
          </li>
        </ul>
      ),
    },
    {
      company: "International Labour Organization",
      link: "https://www.ilo.org",
      badges: ["Remote", "Graphic Design", "UI/UX", "Frontend"],
      title: "UI/UX- & Frontend-Entwickler",
      logo: null,
      start: "10.2019",
      end: "05.2022",
      description: (
        <ul className="list-inside list-disc space-y-0.5">
          <li>
            Gestaltung konsistenter visueller Identitäten und moderner
            UI-Designs für globale E-Reports.
          </li>
          <li>
            Verbesserung der Barrierefreiheit und User Journeys nach aktuellen
            Web-Standards.
          </li>
          <li>
            Enge Zusammenarbeit mit interdisziplinären Stakeholdern weltweit
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
        <ul className="list-inside list-disc space-y-0.5">
          <li>
            Konzeption und Gestaltung von Marketing-Packages (Broschüren,
            Banner, Signage), was die Markenpräsenz signifikant steigerte.
          </li>
          <li>
            Erstellung von Trendboards und Durchführung von Marktanalysen zur
            Identifikation neuer Chancen und strategischen Steuerung.
          </li>
          <li>
            Steuerung mehrerer Design-Projekte parallel unter Einhaltung enger
            Deadlines und Abstimmung mit Vertrieb, Produktion und Kunden.
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
