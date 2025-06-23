import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

interface AboutProps {
    summary: typeof RESUME_DATA.summary;
    className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
    return (
        <Section className={className}>
            <div
                className="text-foreground/80 space-y-1 text-sm text-pretty print:text-[12px]"
                aria-labelledby="about-section"
            >
                {summary}
            </div>
        </Section>
    );
}
