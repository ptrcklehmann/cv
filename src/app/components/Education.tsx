import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Education = (typeof RESUME_DATA)["education"][number];

interface EducationPeriodProps {
  start: Education["start"];
  end: Education["end"];
}

/**
 * Displays the education period in a consistent format
 */
function EducationPeriod({ start, end }: EducationPeriodProps) {
    return (
        <div
            className="text-foreground/70 font-mono text-xs leading-none text-nowrap tabular-nums sm:text-sm"
            aria-label={`Period: ${start} to ${end}`}
        >
            {start} - {end}
        </div>
    );
}

interface SchoolLinkProps {
    school: string;
    link: string;
}

function SchoolLink({ school, link }: SchoolLinkProps) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 leading-none font-medium hover:underline"
            aria-label={`Visit ${school} website`}
        >
            <h3 id={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}>{school}</h3>
        </a>
    );
}

interface EducationItemProps {
    education: Education;
}

/**
 * Individual education card component
 */
function EducationItem({ education }: EducationItemProps) {
    const { school, start, end, degree } = education;

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                    <SchoolLink school={school} link={education.link} />
                    {/* Display period of education */}
                    <EducationPeriod start={start} end={end} />
                </div>
            </CardHeader>
            <CardContent
                className="text-foreground/80 print:text-[12px]"
                aria-labelledby={`education-${school.toLowerCase().replace(/\s+/g, "-")}`}
            >
                {degree}
            </CardContent>
        </Card>
    );
}

interface EducationListProps {
  education: readonly Education[];
}

/**
 * Main education section component
 * Renders a list of education experiences
 */
export function Education({ education }: EducationListProps) {
  return (
      <Section role="region" aria-label="Education section">
          <h2 className="text-muted-foreground text-2xl font-bold uppercase" id="education-section">
              Education
          </h2>
          <div className="space-y-4" role="feed" aria-labelledby="education-section">
              {education.map((item) => (
                  <article key={item.school} role="article">
                      <EducationItem education={item} />
                  </article>
              ))}
          </div>
      </Section>
  );
}
