import { SVGProps, ReactElement, ReactNode } from "react";

/**
 * Types for Resume and Cover Letter data structures
 */
type Social = {
    name: string;
    url: string;
    icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

type Education = {
    school: string;
    link: string;
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

export type ResumeData = {
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

export type CoverLetterData = {
    name: string;
    location: string;
    locationLink: string;
    about: string;
    personalWebsiteUrl: string;
    contact: {
        email: string;
        tel: string;
    };
    company: {
        name: string;
        location: string;
    };
    date: string;
    greeting: ReactNode;
    body: ReactNode;
};
