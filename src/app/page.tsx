import { Metadata } from "next";

import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Summary } from "./components/Summary";
import { WorkExperience } from "./components/WorkExperience";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { baseSiteUrl } from "@/lib/config";

export const metadata: Metadata = {
    metadataBase: baseSiteUrl,
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    openGraph: {
        url: baseSiteUrl,
        title: `${RESUME_DATA.name} - Resume`,
        description: RESUME_DATA.about,
        type: "profile",
        locale: "en_UK",
        siteName: "Patrick Lehmann - Resume",
        images: [
            {
                url: `${baseSiteUrl}opengraph-image`,
                width: 1200,
                height: 630,
                alt: `${RESUME_DATA.name}'s profile picture`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${RESUME_DATA.name} - Resume`,
        description: RESUME_DATA.about,
        images: [`${baseSiteUrl}opengraph-image`],
    },
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
    const links = [];

    if (RESUME_DATA.personalWebsiteUrl) {
        links.push({
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
        });
    }

    return [
        ...links,
        ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
        })),
    ];
}

export default function ResumePage() {
    return (
        <main
            className="relative container mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-8"
            id="main-content"
        >
            <div className="sr-only">
                <h1>{RESUME_DATA.name}&apos;s Resume</h1>
            </div>

            <section
                className="mx-auto w-full max-w-3xl space-y-6 print:space-y-4"
                aria-label="Resume Content"
            >
                <Header />

                <div className="space-y-6 print:space-y-3">
                    <Summary summary={RESUME_DATA.summary} />

                    <WorkExperience work={RESUME_DATA.work} />

                    <Education education={RESUME_DATA.education} />

                    <Skills skills={RESUME_DATA.skills} />
                </div>
            </section>

            <nav className="print:hidden" aria-label="Quick navigation">
                <CommandMenu links={getCommandMenuLinks()} />
            </nav>
        </main>
    );
}
