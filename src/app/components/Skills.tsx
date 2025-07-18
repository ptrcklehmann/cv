import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { TypographyH2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type Skills = readonly string[];

interface SkillsListProps {
    skills: Skills;
    className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
    return (
        <ul
            className={cn(
                "flex list-none flex-wrap gap-1 p-0 leading-none print:gap-x-2 print:gap-y-1",
                className,
            )}
            aria-label="List of skills"
        >
            {skills.map((skill) => (
                <li key={skill}>
                    <Badge
                        className="print:p-0 print:text-[11px] print:leading-tight"
                        aria-label={`Skill: ${skill}`}
                    >
                        {skill}
                    </Badge>
                </li>
            ))}
        </ul>
    );
}

interface SkillsProps {
    skills: Skills;
    className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
    return (
        <Section className={className}>
            <TypographyH2 id="skills-section">Skills</TypographyH2>
            <SkillsList skills={skills} aria-labelledby="skills-section" />
        </Section>
    );
}
