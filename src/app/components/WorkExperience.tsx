import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn(
        "inline-flex list-none gap-x-0.5 p-0 leading-none",
        className,
      )}
      aria-label="Technologies used"
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-[13px] leading-none print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="text-foreground/70 font-mono text-xs text-nowrap tabular-nums sm:text-sm"
      aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  return (
    <a
      className="text-foreground text-sm font-medium hover:underline print:font-medium"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} company website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const { company, link, badges, title, start, end, description } = work;

  return (
    <Card className="py-1 print:py-0.5">
      <CardHeader className="print:space-y-0">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <span className="inline-flex items-center justify-center gap-x-1">
            <h3 className="text-md text-muted-foreground leading-none font-semibold uppercase">
              {title}
            </h3>
            <BadgeList
              className="hidden gap-x-0.5 sm:inline-flex"
              badges={badges}
            />
          </span>
          <WorkPeriod start={start} end={end} />
        </div>
        <CompanyLink company={company} link={link} />
      </CardHeader>

      <CardContent>
        <div className="text-foreground/80 mt-2 text-sm text-pretty print:mt-1 print:text-[11px]">
          {description}
        </div>
        <div className="mt-1">
          <BadgeList
            className="-mx-2 flex-wrap gap-0.5 sm:hidden"
            badges={badges}
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
      <Section>
          <h2 className="text-muted-foreground text-2xl font-bold uppercase" id="experience">
              Experience
          </h2>
          <div className="space-y-4 print:space-y-0" role="feed" aria-labelledby="experience">
              {work.map((item) => (
                  <article key={`${item.company}-${item.start}`} role="article">
                      <WorkExperienceItem work={item} />
                  </article>
              ))}
          </div>
      </Section>
  );
}
