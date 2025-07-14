import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
    name: "Patrick Lehmann",
    initials: "PL",
    location: "Berlin, Germany CET",
    locationLink: "https://www.google.com/maps/place/Berlin,+Germany",
    about: "Frontend Developer",
    summary: (
        <>
            <p className="print:leading-snug">
                Frontend Developer with 5+ years of expertise in React, Next.js, and TypeScript,
                building scalable web and mobile apps. Led projects from architecture to launch,
                introducing modern JS tooling and robust CI/CD workflows to enhance deployment
                efficiency and stability. Combines deep technical skills with strong UI/UX
                principles to create performant, user-focused frontends.
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
            link: "https://unipac.br",
            degree: "BSc in Systems Analysis and Development",
            start: "01.2006",
            end: "07.2011",
        },
        {
            school: "Ironhack Berlin",
            link: "https://www.ironhack.com/de-en/web-development/berlin",
            degree: "Full-Stack Web Development Bootcamp",
            start: "01.2021",
            end: "05.2021",
        },
    ],
    work: [
        {
            company: "code-b",
            link: "https://code-b.com",
            badges: ["React", "Next.js", "React Native", "TypeScript", "GraphQL", "CI/CD"],
            title: "Frontend Developer",
            logo: null,
            start: "06.2022",
            end: "04.2025",
            description: (
                <ul className="list-inside list-disc space-y-0.5">
                    <li className="print:leading-relaxed">
                        Built and shipped production-grade web and mobile apps (e.g.,{" "}
                        <a
                            className="hover:text-foreground underline"
                            href="https://thepioneer.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="ThePioneer.de"
                        >
                            ThePioneer.de
                        </a>
                        ,{" "}
                        <a
                            className="hover:text-foreground underline"
                            href="https://tabletop-herald.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Tabletop Herald"
                        >
                            Tabletop Herald
                        </a>
                        ) using React ecosystems, enhancing user engagement and performance.
                    </li>
                    <li className="print:leading-relaxed">
                        Led implementation of CI/CD pipelines with GitHub Actions and Jest testing,
                        significantly accelerating deployment cycles and ensuring consistent product
                        quality.
                    </li>
                    <li className="print:leading-relaxed">
                        Owned the full lifecycle for key features, from initial architecture and
                        technical planning to deployment and continuous iteration.
                    </li>
                    <li className="print:leading-relaxed">
                        Established best practices in TypeScript and component-driven development,
                        improving scalability and reducing bug frequency across multiple projects.
                    </li>
                    <li className="print:leading-relaxed">
                        Mentored 2 junior developers through code reviews and structured onboarding,
                        enabling rapid productivity and elevating overall code quality.
                    </li>
                </ul>
            ),
        },
        {
            company: "Freelance",
            link: "https://ptrcklehmann.com",
            badges: ["TypeScript", "React", "React Native", "GraphQL", "Node.js"],
            title: "Full-Stack Developer",
            logo: null,
            start: "05.2016",
            end: "05.2022",
            description: (
                <ul className="list-inside list-disc space-y-0.5">
                    <li className="print:leading-relaxed">
                        Delivered full-featured web and mobile applications for clients in media,
                        education, and non-profit sectors, often working solo from scoping to
                        deployment.
                    </li>
                    <li className="print:leading-relaxed">
                        Modernised legacy codebases by migrating to React + GraphQL, reducing tech
                        debt and enabling feature velocity for long-term clients.
                    </li>
                    <li className="print:leading-relaxed">
                        Built high-availability interfaces using React Native and TypeScript,
                        focusing on accessibility, maintainability, and performance.
                    </li>
                    <li className="print:leading-relaxed">
                        Acted as primary technical point of contact: managed expectations, sprint
                        priorities, and delivery timelines directly with stakeholders.
                    </li>
                </ul>
            ),
        },
        {
            company: "International Labour Organization (UN)",
            link: "https://www.ilo.org",
            badges: ["UI/UX", "Design Systems", "Figma", "HTML/CSS"],
            title: "UI/Frontend Developer",
            logo: null,
            start: "10.2019",
            end: "05.2022",
            description: (
                <ul className="list-inside list-disc space-y-0.5">
                    <li className="print:leading-relaxed">
                        Designed and implemented branded UI components for global initiatives like
                        Global Social Protection Week, ensuring alignment with UN accessibility
                        standards.
                    </li>
                    <li className="print:leading-relaxed">
                        Translated complex policy data into clean, engaging visuals (infographics,
                        interactive layouts) for reports and event platforms viewed by thousands
                        worldwide.
                    </li>
                    <li className="print:leading-relaxed">
                        Delivered digital publications to UN&apos;s strict monthly publication
                        schedule, reducing late deliveries by 40% year-over-year.
                    </li>
                    <li className="print:leading-relaxed">
                        Modernised digital publications by introducing consistent design systems and
                        web-optimised assets, improving readability and user navigation.
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
                        Designed impactful marketing packages, including compelling print materials,
                        brochures, banners, and signage, significantly improving brand visibility
                        and market presence.
                    </li>
                    <li className="print:leading-relaxed">
                        Produced insightful trend boards and conducted market analysis to identify
                        emerging opportunities, enabling strategic business decisions and
                        capitalizing on industry shifts.
                    </li>
                    <li className="print:leading-relaxed">
                        Managed multiple design projects simultaneously with tight deadlines.
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
        "Git",
        "CI/CD",
        "Jest",
        "Vitest",
        "Docker",
        "Xcode",
        "Android Studio",
        "Figma",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Agile/Scrum",
    ],
    projects: [],
} as const;
