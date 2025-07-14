import React from "react";

type TypographyH2Props = React.HTMLAttributes<HTMLHeadingElement> & {
    children?: React.ReactNode;
};

const TypographyH2: React.FC<TypographyH2Props> = React.memo(({ className = "", children, ...props }) => {

  return (
    <h2 {...props} className={`text-muted-foreground uppercase scroll-m-20 border-b text-[22px] print:text-[22px] font-semibold leading-tight tracking-tight first:mt-0 ${className}`}>
      {children}
    </h2>
  );
});

export { TypographyH2 };
