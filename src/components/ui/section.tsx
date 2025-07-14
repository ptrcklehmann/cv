import React from "react";

import { cn } from "@/lib/utils";

export type SectionProps = React.HTMLAttributes<HTMLDivElement>;

export function Section({ className, ...props }: SectionProps) {
    return (
        <section
            className={cn("flex min-h-0 flex-col space-y-1 gap-y-1 print:gap-y-1", className)}
            {...props}
        />
    );
}
